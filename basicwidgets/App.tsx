/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SpotifyApp from './components/SpotifyApp';


function Blank():JSX.Element{
  return(
    <View style={{backgroundColor:'black'}}>

    </View>
  )
}

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} backgroundColor='white'/>
      <SpotifyApp/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 500,
    height: 200,
    // backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  element: {
    width: 200,
    height: 150,
    backgroundColor: 'pink',
    marginHorizontal: 10,
  },
});

export default App;
