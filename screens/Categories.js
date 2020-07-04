import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import CategoryListItem from '../components/CategoryListItem';

export default class Categories extends Component {
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
    const { navigation } = this.props;
    const { categories } = this.state;
    return (
      <FlatList
        data={categories}
        renderItem={ 
          ({ item }) => 
          <CategoryListItem 
            category={item} 
            onPress={ () => navigation.navigate('Category', {
              categoryName: item.title.toUpperCase()
            })} 
          />
      }
        keyExtractor={item => `${item.id}`}
        contentContainerStyle={styles.container}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingLeft: 16, 
    paddingRight: 16,
  },
});
