import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home/Home';

export default function App() {
  return (
    <View style={{ backgroundColor: '#151515', flex: 1 }}>
      <Home />
      <StatusBar style='light' />
    </View>
  );
}
