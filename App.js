import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import AppNavigator from './AppNavigator';
import axios from 'axios';
import { CartProvider } from './context/CartContext';


axios.defaults.baseURL = 'https://my-json-server.typicode.com/phancongtaidhsp/mock-datas';

export default function App() {
  return (
    <CartProvider>
      <AppNavigator />
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
