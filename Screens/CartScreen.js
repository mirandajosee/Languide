import React from 'react';
import { View, Text, FlatList, TouchableOpacity,ActivityIndicator, StyleSheet } from 'react-native';
import CartItem from '../Components/CartItem';
import { CART } from '../data/cart';
import StyleConstants from '../Constants/StyleConstants';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem,confirmCart } from '../store/actions/cart.actions';
import { BuyCourse } from '../store/actions/bayedcourses.action';

const CartScreen = () => {
  const dispatch = useDispatch()
  const items = useSelector(state => state.cart.items)
  const total = useSelector(state => state.cart.total)
  const status = useSelector(state => state.cart.status)
  const userId = useSelector(state => state.auth.userId);
  const handlerDeleteItem = (id) => dispatch(removeItem(id));
  const handlerConfirmCart = () => {dispatch(confirmCart(items,total,userId)); dispatch(BuyCourse(items))}

  const renderItem = (data) => (
    <CartItem item={data.item} onDelete={handlerDeleteItem} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={useSelector((state)=> state.cart.items)}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>
      <View style={styles.footer}>
        <ActivityIndicator
          animating={status === 'loading'}
          size="large"
          color={StyleConstants.mainColor}
        />
        <TouchableOpacity style={styles.confirm} onPress={handlerConfirmCart}>
          <Text style={styles.text}>Confirmar</Text>
          <View style={styles.total}>
            <Text style={styles.text}>Total</Text>
            <Text style={styles.text}>${total}</Text>
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