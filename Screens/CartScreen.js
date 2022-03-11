import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import CartItem from '../Components/CartItem';
import { CART } from '../data/cart';
import StyleConstants from '../Constants/StyleConstants';

const CartScreen = () => {
  const handlerDeleteItem = (id) => {};
  const handlerConfirmCart = () => {};

  const renderItem = (data) => (
    <CartItem item={data.item} onDelete={handlerDeleteItem} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={CART}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.confirm} onPress={handlerConfirmCart}>
          <Text style={styles.text}>Confirmar</Text>
          <View style={styles.total}>
            <Text style={styles.text}>Total</Text>
            <Text style={styles.text}>$3000</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: StyleConstants.secondaryColor,
    paddingBottom: 120,
  },
  list: {
    flex: 1,
  },
  footer: {
    padding: 12,
    borderTopColor: StyleConstants.mainColor,
    borderTopWidth: 1,
  },
  confirm: {
    backgroundColor: StyleConstants.mainColor,
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  total: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 18,
    padding: 8,
    color:"white",
    fontFamily:StyleConstants.secondaryFont
  },
});

export default CartScreen;