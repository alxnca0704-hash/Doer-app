import { createEmptyStateStyle } from "@/assets/styles/emptyState";
import useTheme from "@/hooks/useTheme";
import { Text, View } from "react-native";

const EmptyState = () => {
  const {colors} = useTheme();
  const emptyStateStyle = createEmptyStateStyle(colors); 
  return (
    <View style={emptyStateStyle.container}>
      <Text style={emptyStateStyle.title}>No todos yet!</Text>
      <Text style={emptyStateStyle.message}>Add your first todo above to get started</Text>
    </View>
  );
};

export default EmptyState;