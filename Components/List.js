import React from "react"
import {StyleSheet,Button,Text,View,FlatList,Image} from 'react-native';
import StyleConstants from "../Constants/StyleConstants";

function MainList({itemList,handle,buttonTitle}) {
    return(
        <FlatList data={itemList} renderItem={({item}) => (
            <View style={styles.item}>
                <Image source={{uri:item.onlineImage}} style={styles.imageView} />
                <View style={styles.info}>
                    <Text style={{color: "white", fontSize:30,fontFamily:StyleConstants.mainFont}}>{item.value}</Text>
                    <Button onPress={() => handle(item)} title={buttonTitle} />
                </View>
                <View style={styles.info}>
                    <Text style={{color:"aliceblue"}}>
                        Dictado por {item.Teacher}
                    </Text>
                </View>
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
        backgroundColor: StyleConstants.mainColor,
        justifyContent: "space-between",
        
      },
    imageView:{
        height:225,
        width:203,
        maxWidth:'100%',
        maxHeight:"100%",
        minHeight:"50%",
        minWidth:"50%",
        borderRadius:20,
        alignSelf:"center"
    },
    info:{
        flexDirection:'row',
        alignItems: "center",
        justifyContent: "space-between"

    }
})

export default MainList