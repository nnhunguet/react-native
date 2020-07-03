import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import CategoryListItem from './components/CategoryListItem';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {id: 1, title: 'Spider Man 2002'},
        {id: 2, title: 'Spider Man Home Coming'},
        {id: 3, title: 'Spider Man: far from home'}
      ]
    }
  }
  render() {
    const { categories } = this.state;
    return (
      <FlatList
        data={categories}
        renderItem={ ({ item }) => <CategoryListItem category={item} />}
        keyExtractor={item => `${item.id}`}
        contentContainerStyle={{paddingLeft: 16, paddingRight: 16}}
      />
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
