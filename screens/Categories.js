import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import CategoryListItem from '../components/CategoryListItem';
import axios from 'axios';

function Categories({ navigation }) {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source()

    axios.get('/categories',{ cancelToken: source.token })
      .then(res => {
        setCategories(res.data)
      })
      .catch(err => console.log(err))
    return function cleanup(){
      source.cancel('Operation canceled by the user.');
    }
  })

  return (
    <FlatList data={categories}
        renderItem={({ item }) => <CategoryListItem category={item}
        onPress={() => navigation.navigate('Category',{ category: item })}/>}
        keyExtractor={item => `${item.id}`}
        contentContainerStyle={styles.container}>
    </FlatList>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16
  },
});

export default Categories;