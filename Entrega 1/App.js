import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image} from 'react-native';
import GifImage from './src/components/GifImage';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20, fontWeight: 500, padding: 10,}}>Hello Coder!</Text>
      <GifImage/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
