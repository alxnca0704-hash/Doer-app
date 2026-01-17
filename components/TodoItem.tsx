import { createTodoItemStyle } from '@/assets/styles/todoItem';
import { api } from '@/convex/_generated/api';
import { Doc, Id } from '@/convex/_generated/dataModel';
import useTheme from "@/hooks/useTheme";
import { Ionicons } from '@expo/vector-icons';
import { useMutation } from 'convex/react';
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import TodoModal from './TodoModal';

type Todo = Doc<"todos">;

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const { colors } = useTheme();
  const todoItemStyle = createTodoItemStyle(colors);
  const toggleTodo = useMutation(api.todos.toggleTodo);
  const deleteTodo = useMutation(api.todos.deleteTodo);
  const updateTodo = useMutation(api.todos.updateTodo);
  const [modalVisible, setModalVisible] = useState(false);
  const [editingId, setEditingId] = useState<Id<"todos"> | null>(null);
  const [editText, setEditText] = useState("");  

  const handleToggleTodo = async (id: Id<"todos">) => {
    try {
      await toggleTodo({ id });
    } catch (error) {
      console.log("Error toggling todo", error);
      Alert.alert("Error", "Failed to toggle todo");
    }
  };

  const handleLongPress = () => {
    setModalVisible(true);
  };

  const handleEdit = () => {
    setEditingId(todo._id);
    setEditText(todo.text);
  };

  const handleSaveEdit = async () => {
    if (!editText.trim()) {
      Alert.alert("Error", "Todo text cannot be empty");
      return;
    }

    try {
      await updateTodo({ id: todo._id, text: editText.trim() });
      setEditingId(null);
      setEditText("");
    } catch (error) {
      console.log("Error updating todo", error);
      Alert.alert("Error", "Failed to update todo");
    }
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditText("");
  };

  const handleDelete = async () => {
    Alert.alert(
      "Delete Todo",
      "Are you sure you want to delete this todo?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: async () => {
            try {
              await deleteTodo({ id: todo._id });
            } catch (error) {
              console.log("Error deleting todo", error);
              Alert.alert("Error", "Failed to delete todo");
            }
          }
        }
      ]
    );
  };

  const isEditing = editingId === todo._id;

  return (
    <>
      {isEditing ? (
        // Editing Mode
        <View style={[todoItemStyle.container, styles.editContainer, {borderColor: colors.border}]}>
          <TextInput
            style={styles.editInput}
            value={editText}
            onChangeText={setEditText}
            autoFocus
          />
          
          <View style={styles.editButtons}>
            {/* Save Button */}
            <TouchableOpacity
              style={[styles.editButton, styles.saveButton]}
              onPress={handleSaveEdit}
              activeOpacity={0.7}
            >
              <Ionicons name="checkmark" size={20} color="#fff" />
            </TouchableOpacity>

            {/* Cancel Button */}
            <TouchableOpacity
              style={[styles.editButton, styles.cancelButton]}
              onPress={handleCancelEdit}
              activeOpacity={0.7}
            >
              <Ionicons name="close" size={20} color="#000000" />
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        // Normal Mode
        <>
          <TouchableOpacity 
            style={todoItemStyle.container}
            onLongPress={handleLongPress}
            activeOpacity={0.7}
          >
            <Text style={todoItemStyle.title}>{todo.text}</Text>

            {/* Checkbox */}
            <TouchableOpacity
              activeOpacity={0.7}
              style={[
                todoItemStyle.checkbox,
                todo.isCompleted && { backgroundColor: colors.border }
              ]}
              onPress={() => handleToggleTodo(todo._id)}
            >
              {todo.isCompleted && (
                <Ionicons
                  name="checkmark"
                  size={16}
                  color={colors.icons} 
                />
              )}
            </TouchableOpacity>
          </TouchableOpacity>

          <TodoModal 
            visible={modalVisible}
            todo={todo}
            onClose={() => setModalVisible(false)}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  editContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
  },
  editInput: {
    flex: 1,
    fontSize: 16,
    padding: 8,
    borderWidth: 1,
    borderRadius: 8,
    marginRight: 8,
    minHeight: 40,
    textAlignVertical: 'center',
  },
  editButtons: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  editButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveButton: {
    backgroundColor: '#000000',
  },
  cancelButton: {
    backgroundColor: '#f4f4f4',
  },
});

export default TodoItem;