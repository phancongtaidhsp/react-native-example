import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';

import Category from './screens/Category'
import Categories from './screens/Categories'
import Cart from './screens/Cart'
import Order from './screens/Order'
import Setting from './screens/Setting'
import IconWithBadge from './components/IconWithBadge';
import { CartContext } from './context/CartContext';

const CategoryStack = createStackNavigator();
const CartStack = createStackNavigator();
const SettingStack = createStackNavigator();
const OrderStack = createStackNavigator();

const Tab = createBottomTabNavigator();

function ShoppingStackScreen() {
  return (
    <CategoryStack.Navigator>
      <CategoryStack.Screen name="Categories" component={Categories} />
      <CategoryStack.Screen name="Category" component={Category} />
    </CategoryStack.Navigator>
  );
}

function CartStackScreen() {
  return (
    <CartStack.Navigator>
      <CartStack.Screen name="Giỏ hàng" component={Cart} />
    </CartStack.Navigator>
  )
}

function SettingStackScreen() {
  return (
    <SettingStack.Navigator>
      <SettingStack.Screen name="Setting" component={Setting} />
    </SettingStack.Navigator>
  )
}

function OrderStackScreen() {
  return (
    <OrderStack.Navigator>
      <OrderStack.Screen name="Đơn hàng" component={Order} />
    </OrderStack.Navigator>
  )
}

function AppNavigator(props) {

  const { cartItems } = useContext(CartContext);

  function countItemInCart(cartItem){
    let counter = 0;
    cartItem.map(cartItem => {
      counter+=cartItem.quantity;
    })
    return counter;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen options={{
          tabBarIcon: () => <IconFeather name="layers" size={30} color="#900" />
        }} name="Shopping" component={ShoppingStackScreen} />

        <Tab.Screen options={{
          tabBarIcon: () => <IconWithBadge badgeCount={countItemInCart(cartItems)}><IconAntDesign name="shoppingcart" size={30} color="#900" /></IconWithBadge>
        }} name="Giỏ hàng" component={CartStackScreen} />

        <Tab.Screen options={{
          tabBarIcon: () => <IconFeather name="shopping-bag" size={30} color="#900" />
        }} name="Đơn hàng" component={OrderStackScreen} />

        <Tab.Screen options={{
          tabBarIcon: () => <IconAntDesign name="setting" size={30} color="#900" />
        }} name="Settings" component={SettingStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
