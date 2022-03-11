import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import StyleConstants from '../Constants/StyleConstants';

const CartItem = ({ item, onDelete }) => {
  return (
    <View style={styles.item}>
      <View>
        <Text style={styles.header}>{item.value}</Text>
      </View>
      <View style={styles.detail}>
        <View>
          <Text>Cantidad: {item.quantity}</Text>
          <Text>{item.price}</Text>
        </View>
        <TouchableOpacity onPress={() => onDelete(item.id)}>
          <Entypo name="trash" size={24} color={StyleConstants.mainColor} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: StyleConstants.mainColor,
    backgroundColor:StyleConstants.terciaryColor,
    borderRadius:20
  },
  header: {
    fontSize: 18,
  },
  detail: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
  },
});

export default CartItem;