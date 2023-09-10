import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Products from './src/screens/Products';
import Home from './src/screens/Home';
import { colors } from './src/theme/colors';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Home/>
      </View>
    </SafeAreaView>
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
