import React, { useEffect,useReducer,useState } from 'react';
import { View, Text ,StyleSheet,FlatList} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../store/actions/order.action';
import StyleConstants from '../Constants/StyleConstants';
import CartItem from '../Components/CartItem';
import { BuyCourse } from '../store/actions/bayedcourses.action';

const OrdersScreen = () => {
  const userId = useSelector(state => state.auth.userId);
  const realData=useSelector(state => state.buy.Data)
  const handlerDeleteItem = () => {} 
  const dispatch = useDispatch();
  const list = useSelector(state => state.orders.list);
  let OrderCourses=[]
  if (list.filter(function(item) {return item.userId==userId})[0]!=undefined && JSON.stringify(realData)==JSON.stringify([])) {
    for (const orders of list.filter(function(item) {return item.userId==userId})){
    OrderCourses.push(...(orders["items"]))
    }
    dispatch(BuyCourse(OrderCourses))
    OrderCourses=[]
  }
  const renderItem = (data) => (
    <CartItem item={data.item} onDelete={handlerDeleteItem} />);
  useEffect(()=>{dispatch(getOrders());},[])
  
  return (
    <View style={styles.container}>
      <Text style={styles.uppertext}>Tus pagos:</Text>
      
      <View style={{flex:1}}>
        <FlatList
            data={realData}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            />
      </View> 
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: StyleConstants.secondaryColor,
      paddingBottom: 50,
    },
    uppertext:{
        alignItems:"center",
        fontSize:StyleConstants.titleFontSize,
        color: StyleConstants.mainColor,
        marginVertical: 0,
        fontFamily:StyleConstants.mainFont
      }

});

export default OrdersScreen;