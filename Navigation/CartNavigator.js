import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CartScreen from '../Screens/CartScreen';
import { Platform, StyleSheet } from 'react-native';
import StyleConstants from '../Constants/StyleConstants';

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
  return (
    <Stack.Navigator 
    screenOptions={{
      headerStyle: styles.header,
      headerTitleStyle: styles.headerTitle,
      headerTintColor: Platform.OS === 'ios' ? StyleConstants.mainColor : 'white'
    }}
    > 
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: Platform.OS === 'ios' ? 'white' : 'royalblue',
  },
  headerTitle: {
    fontFamily:StyleConstants.mainFont,
    fontWeight: 'bold',
  },
})
export default CartNavigator;