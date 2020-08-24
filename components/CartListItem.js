import React, { useContext } from 'react'
import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { CartContext } from '../context/CartContext';

function CartListItem(props) {
  const { cartItem } = props;
  const { addToCart, removeItem } = useContext(CartContext);

  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.contentCartItem}>
          <Image style={styles.categoryImage} source={{ uri: cartItem.item.images[0].url }} />
          <View style={styles.groupNamePrice}>
            <Text style={styles.title}>{cartItem.item.name}</Text>
            <Text>{cartItem.item.price * cartItem.quantity}</Text>
          </View>
        </View>
        <View style={styles.groupBtn}>
          <TouchableOpacity onPress={() => removeItem(cartItem.item)}>
            <View style={styles.btn}><Text style={{ fontSize: 20 }}>-</Text></View>
          </TouchableOpacity>
          <Text>{cartItem.quantity}</Text>
          <TouchableOpacity onPress={() => addToCart(cartItem.item)}>
            <View style={styles.btn}><Text style={{ fontSize: 20 }}>+</Text></View>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderRadius: 4,
    borderColor: "#000",
    backgroundColor: "#FFF",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 0 },
    marginBottom: 16,
    marginLeft: 4,
    marginRight: 4
  },
  contentCartItem: {
    flexDirection: "row",
  },
  groupNamePrice: {
    justifyContent: "center",
    marginLeft: 12
  },
  categoryImage: {
    width: 64,
    height: 64
  },
  title: {
    textTransform: "uppercase",
    marginBottom: 8,
    fontWeight: "700"
  },
  groupBtn: {
    flexDirection: "row",
    alignItems: "center"
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    width: 30,
    height: 30,
    marginHorizontal: 12,
    backgroundColor: '#0199FF',
    borderRadius: 15,
  }

})

export default CartListItem;