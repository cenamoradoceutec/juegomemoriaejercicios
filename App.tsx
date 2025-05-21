import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/components/Home';
import JuegosProvider from './src/Provider/JuegosProvider';
import AppNavigator from './src/Navigation/AppNavigator';

export default function App() {
  return (
    <JuegosProvider>
      <AppNavigator />
    </JuegosProvider>
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





