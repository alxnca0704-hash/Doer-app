import { createHomeStyles } from '@/assets/styles/home.ts';
import Header from '@/components/Header';
import useTheme from '@/hooks/useTheme';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  const {colors} = useTheme();
  const homestyle = createHomeStyles(colors);
  return (
    <SafeAreaView style={homestyle.container}>
      <Header title='Doer'/>
    </SafeAreaView>
  );
}
