import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ProductListItem from '../components/ProductListItem';

export default class Category extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id:1,
          images: [
            {
              url: 'https://lh3.googleusercontent.com/lQq0h1Al3gsqwIlZx9BbevTCdz1-eMqDWQ6jpSbVAexfRyVfCaFtCYVq2t8SvgUYdtLPKfm9QuACn0xh-xI'
            }
          ],
          name: 'Spider Man: Far From Home',
          price: 500000
        },
        {
          id:2,
          images: [
            {
              url: 'https://lh3.googleusercontent.com/lQq0h1Al3gsqwIlZx9BbevTCdz1-eMqDWQ6jpSbVAexfRyVfCaFtCYVq2t8SvgUYdtLPKfm9QuACn0xh-xI'
            }
          ],
          name: 'Spider Man: Far From Home',
          price: 100000
        },
        {
          id:2,
          images: [
            {
              url: 'https://lh3.googleusercontent.com/lQq0h1Al3gsqwIlZx9BbevTCdz1-eMqDWQ6jpSbVAexfRyVfCaFtCYVq2t8SvgUYdtLPKfm9QuACn0xh-xI'
            }
          ],
          name: 'Spider Man: Far From Home',
          price: 100000
        },
        {
          id:2,
          images: [
            {
              url: 'https://lh3.googleusercontent.com/lQq0h1Al3gsqwIlZx9BbevTCdz1-eMqDWQ6jpSbVAexfRyVfCaFtCYVq2t8SvgUYdtLPKfm9QuACn0xh-xI'
            }
          ],
          name: 'Spider Man: Far From Home',
          price: 100000
        },
      ]
    }
  }

  render() {
    return (
      <FlatList
        contentContainerStyle={styles.container}
        data={this.state.products}
        numColumns={2}
        renderItem={({  item }) =>
          <View style={styles.wrapper}> 
            <ProductListItem product={item}/>
          </View>
      }
      keyExtractor={(item) => `${item.id}`}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 4,
    paddingTop: 16
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: 4
  }
});
