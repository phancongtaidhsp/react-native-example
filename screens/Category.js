import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import ProductListItem from '../components/ProductListItem';
import axios from 'axios';

function Category({ route, navigation }) {
  const { category } = route.params;
  const [products, setProducts] = useState([
  ]);

  useEffect(() => {
    axios.get(`/products?idCategory=${category.id}`)
      .then(res => {
        setProducts(res.data)
      })
      .catch(error => {
        console.log(error)
      })
  })

  return (
    <FlatList 
      data={products}
      contentContainerStyle={styles.container}
      numColumns={2}
      renderItem={({ item }) =>
      <View style={styles.wrapper}>
        <ProductListItem product={item} />
      </View>}
      keyExtractor={(item) => `${item.id}`} />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingTop: 16
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: 8
  }
});

export default Category;