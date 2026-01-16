import { createAddTaskStyles } from '@/assets/styles/addTask'
import EmptyState from '@/components/EmptyState'
import Header from '@/components/Header'
import Input from '@/components/Input'
import TodoItem from '@/components/TodoItem'
import { api } from '@/convex/_generated/api'
import { Doc } from '@/convex/_generated/dataModel'
import useTheme from '@/hooks/useTheme'
import { useQuery } from 'convex/react'
import React from 'react'
import { FlatList, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

type Todo = Doc<"todos">;
const AddTaskScreen = () => {
  const {colors} = useTheme();
  const addTaskStyle = createAddTaskStyles(colors);
  const todos = useQuery(api.todos.getTodos);



  const renderTodoItem = ({ item }: { item: Todo }) => (
    <TodoItem todo={item} />
  );

  return (
    <SafeAreaView style={addTaskStyle.container}>
      <Header title='Add Task'/>
      <Input/>

      <Text style={addTaskStyle.availTaskText}>
        Available Task
      </Text>

      <FlatList 
        data={todos} 
        renderItem={renderTodoItem} 
        keyExtractor={(item) => item._id} 
        ListEmptyComponent={EmptyState}
      />
    </SafeAreaView>
  )
}

export default AddTaskScreen