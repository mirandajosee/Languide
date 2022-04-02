import React, { useEffect,useReducer,useState } from 'react';
import { View, Text ,StyleSheet,FlatList} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../store/actions/order.action';
import StyleConstants from '../Constants/StyleConstants';
import CartItem from '../Components/CartItem';
import { BuyCourse } from '../store/actions/bayedcourses.action';

const OrdersScreen = () => {
  const userId = useSelector(state => state.auth.userId);
  const [Data,setData]=useState([])
  const realData=useReducer(state => state.buy)
  console.log(realData)
  console.log("realData")
  const handlerDeleteItem = () => {} 
  const dispatch = useDispatch();
  const list = useSelector(state => state.orders.list);
  let OrderCourses=[]
  if (list.filter(function(item) {return item.userId==userId})[0]!=undefined && JSON.stringify(Data)==JSON.stringify([])) {
    for (const orders of list.filter(function(item) {return item.userId==userId})){
    OrderCourses.push(...(orders["items"]))
    }
    setData(OrderCourses)
    dispatch(BuyCourse(OrderCourses))
    OrderCourses=[]
  }
  
  //console.log("Vs")
  console.log(realData)
  const renderItem = (data) => (
    <CartItem item={data.item} onDelete={handlerDeleteItem} />);
  useEffect(()=>dispatch(getOrders()),[])
  
  return (
    <View style={styles.container}>
      <Text style={styles.uppertext}>Tus pagos:</Text>
      
      <View style={{flex:1}}>
        <FlatList
            data={Data}
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