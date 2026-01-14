import { createAddTaskStyles } from '@/assets/styles/addTask'
import Header from '@/components/Header'
import useTheme from '@/hooks/useTheme'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const AddTaskScreen = () => {
  const {colors} = useTheme();
  const addTaskStyle = createAddTaskStyles(colors);
  return (
    <SafeAreaView style={addTaskStyle.container}>
      <Header title='Add Task'/>
    </SafeAreaView>
  )
}

export default AddTaskScreen