import React from 'react';

import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native'

import Spider from '../assets/spiderweb.png'

export default function CategotyListItem(props) {
  const { category, onPress } = props;
  return (
    <TouchableOpacity activeOpacity={0.4} onPress= {onPress}>
      <View style={styles.container}>
        <Text style={styles.title}>{category.title}</Text>
        <Image style={styles.categoryImage}  source={Spider}></Image>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 16,
    borderRadius: 4,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0},
    marginBottom: 16
  },
  categoryImage: {
    width: 64,
    height: 64
  },
  title: {
    textTransform: "uppercase",
    marginBottom: 8,
    fontWeight: '700'
  },
})
