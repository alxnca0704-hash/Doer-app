import { createTodoItemStyle } from '@/assets/styles/todoItem';
import { api } from '@/convex/_generated/api';
import { Doc, Id } from '@/convex/_generated/dataModel';
import useTheme from "@/hooks/useTheme";
import { Ionicons } from '@expo/vector-icons';
import { useMutation } from 'convex/react';
import React from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';

type Todo = Doc<"todos">;

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const { colors } = useTheme();
  const todoItemStyle = createTodoItemStyle(colors);
  const toggleTodo = useMutation(api.todos.toggleTodo);

  const handleToggleTodo = async (id: Id<"todos">) => {
    try {
      await toggleTodo({ id });
    } catch (error) {
      console.log("Error toggling todo", error);
      Alert.alert("Error", "Failed to toggle todo");
    }
  };

  return (
    <View style={todoItemStyle.container}>
      <Text style={todoItemStyle.title}>{todo.text}</Text>

      {/* Checkbox */}
<TouchableOpacity
        activeOpacity={0.7}
        style={[
          todoItemStyle.checkbox,
          todo.isCompleted && { backgroundColor: "black" } // fill background if checked
        ]}
        onPress={() => handleToggleTodo(todo._id)}
      >
        {todo.isCompleted && (
          <Ionicons
            name="checkmark"
            size={16}
            color="#fff"
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default TodoItem;
