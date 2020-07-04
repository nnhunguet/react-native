import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import AppContainer from './AppNavigation'

export default class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
