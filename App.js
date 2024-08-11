import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView } from 'react-native';

import Tabs from './src/components/Tabs';

export default function App() {
  
  return (
    <NavigationContainer>
      <Tabs/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageLayout: {
    flex: 1,
    objectFit: 'cover',
  }
});
