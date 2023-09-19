import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { colors } from './src/theme/colors';
import RootNavigation from './src/navigation/RootNavigation';
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from './src/navigation/TabNavigation';

export default function App() {

  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightBlue,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
  },
});
