import React from 'react';
import { StyleSheet, View } from 'react-native';
import MealScreen from './app/screens/MealScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <MealScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
