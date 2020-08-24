import React, { useContext } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { CartContext } from '../context/CartContext';
import CartListItem from '../components/CartListItem';

function CartScreen(props) {
    
    const { cartItems } = useContext(CartContext);

    return (
        <FlatList data={cartItems}
            renderItem={({ item }) => <CartListItem cartItem={item} />}
            keyExtractor={item => `${item.item.id}`}
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

export default CartScreen;