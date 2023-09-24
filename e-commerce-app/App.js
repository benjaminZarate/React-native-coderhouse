import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { colors } from './src/theme/colors';
import RootNavigation from './src/navigation/RootNavigation';
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { store } from './src/redux/store';
import { Provider } from 'react-redux';

export default function App() {
  const [fontsLoaded] = useFonts({
    InclusiveSans: require("./assets/Fonts/InclusiveSans-Regular.ttf"),
    RobotoMono: require("./assets/Fonts/RobotoMono-VariableFont_wght.ttf"),
  });

  if (fontsLoaded === false) {
    return;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </Provider>
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
