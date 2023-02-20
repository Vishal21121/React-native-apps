import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import HomeScreen from './components/HomeScreen';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} backgroundColor="black"></StatusBar>
      <ScrollView>
        <HomeScreen />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
