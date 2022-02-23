import React from "react"
import {StyleSheet,Button,Text,View,FlatList} from 'react-native';

function MainList({itemList,handleOnDelete}) {
    return(
        <FlatList data={itemList} renderItem={({item}) => (
            <View style={styles.item}>
            <Text style={{color: "white", fontSize:20}}>{item.value}</Text>
            <Button onPress={() => handleOnDelete(item)} title='X' />
            </View>
          )} keyExtractor={item => item.id}/>
    )
}

const styles = StyleSheet.create({
    item:{
        padding: 20,
        marginVertical: 20,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 20,
        backgroundColor: "royalblue",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }
})

export default MainList