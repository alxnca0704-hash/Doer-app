import { createInputStyles } from '@/assets/styles/input';
import { api } from "@/convex/_generated/api";
import useTheme from '@/hooks/useTheme';
import { useMutation, useQuery } from "convex/react";
import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Input = () => {
  const { colors } = useTheme();
  const styles = createInputStyles(colors);
  const [newTodo, setNewTodo] = useState("");
  const addTodo = useMutation(api.todos.addTodo);
  const todo = useQuery(api.todos.getTodos);

  const handleAddTodo = async () => {
    if (newTodo.trim()) {
      try {
        await addTodo({ text: newTodo.trim() });
        setNewTodo("");
      } catch (error) {
        console.log("Error adding a todo", error);
        Alert.alert("Error", "Failed to add todo");
      }
    }
  };

  return (
    <View style={styles.container}>
       <TextInput
          style={styles.input}
          placeholder="What needs to be done?"
          value={newTodo}
          onChangeText={setNewTodo}
          onSubmitEditing={handleAddTodo}
          placeholderTextColor={colors.textMuted}
        />
      <TouchableOpacity 
        style={styles.addButton}
        onPress={handleAddTodo}
        activeOpacity={0.7}
      >
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Input