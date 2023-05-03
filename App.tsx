import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';


const App = () => {
  return (
    <SafeAreaProvider>
      <HomeScreen />
    </SafeAreaProvider>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
