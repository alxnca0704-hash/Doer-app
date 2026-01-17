import { createHomeStyles } from '@/assets/styles/home.ts';
import EmptyState from '@/components/EmptyState';
import Header from '@/components/Header';
import LoadingSpinner from '@/components/LoadingSpinner';
import TodoItem from '@/components/TodoItem';
import { api } from '@/convex/_generated/api';
import { Doc } from '@/convex/_generated/dataModel';
import useTheme from '@/hooks/useTheme';
import { useQuery } from 'convex/react';
import { FlatList, StatusBar, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


type Todo = Doc<"todos">;

// Define types for the FlatList data items
type HeaderItem = {
  type: 'header';
  title: string;
  count: number;
};

type TodoItem = {
  type: 'todo';
  data: Todo;
};

type ListItem = HeaderItem | TodoItem;

export default function Index() {
  const {colors} = useTheme();
  const homestyle = createHomeStyles(colors);

  const todos = useQuery(api.todos.getTodos);
  const isLoading = todos === undefined;

  if(isLoading) return <LoadingSpinner message='Please Wait...'/>;

  // Separate todos into completed and not completed
  const incompleteTodos = todos?.filter(todo => !todo.isCompleted) || [];
  const completedTodos = todos?.filter(todo => todo.isCompleted) || [];


  const renderSectionHeader = (title: string, count: number) => (
    <View style={homestyle.sectionHeader}>
      <Text style={homestyle.sectionTitle}>{title}</Text>
      <View style={homestyle.countBadge}>
        <Text style={homestyle.sectionCount}>{count}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={homestyle.container}>
      <StatusBar barStyle={colors.statusBarStyle}/>
      <Header title='Doer'/>
      
      {todos?.length === 0 ? (
        <EmptyState />
      ) : (
        <FlatList<ListItem>

          data={[
            { type: 'header', title: 'Active', count: incompleteTodos.length } as HeaderItem,
            ...incompleteTodos.map(todo => ({ type: 'todo', data: todo } as TodoItem)),

            { type: 'header', title: 'Completed', count: completedTodos.length } as HeaderItem,
            ...completedTodos.map(todo => ({ type: 'todo', data: todo } as TodoItem)),
          ]}

          renderItem={({ item }: { item: ListItem }) => {
            if (item.type === 'header') {
              return renderSectionHeader(item.title, item.count);
            }
            return <TodoItem todo={item.data} />;
          }}

          keyExtractor={(item: ListItem, index: number) => 
            item.type === 'header' ? `header-${item.title}` : item.data._id
          }
        />
      )}
    </SafeAreaView>
  );
}
