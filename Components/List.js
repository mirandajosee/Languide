import React from "react"
import {StyleSheet,Text,View,FlatList,Image,TouchableOpacity} from 'react-native';
import StyleConstants from "../Constants/StyleConstants";
import { Entypo } from '@expo/vector-icons';
import {useState,useEffect} from "react";
import { addItem } from "../store/actions/cart.actions";
import CoursesList from "./Search/Courses";
import { useSelector,useDispatch } from "react-redux";
import { changeFav } from "../store/actions/favcolors.action";


function MainList({itemList,handle,navigation}) {
    //This fuction will randomize the order of the courses
    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle...
        while (currentIndex != 0) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }
    const dispatch=useDispatch()
    const CoursesColor=useSelector((state) => state.favcolor.Dictionary)
    return(
        <FlatList data={shuffle(itemList)} renderItem={({item}) => (
            <TouchableOpacity onPress={() => {
                navigation.navigate('Info', {
                  name: item.value,
                  courseID: item.id,
                })}}>
                <View style={styles.item}>
                    <Image source={{uri:item.onlineImage}} style={{...StyleConstants.imageView2,marginRight:10}} />
                    <View style={styles.info}>
                        <Text style={{color: "white", fontSize:20,fontFamily:StyleConstants.mainFont}}>{item.value}</Text>
                        <Text style={{color:"aliceblue", fontSize:10,fontFamily:StyleConstants.secondaryFont,marginVertical:5}}>
                            Dictado por {item.Teacher}
                        </Text>
                        <View style={styles.bottoms}>
                            <TouchableOpacity onPress={()=>dispatch(addItem(CoursesList.find(k => k.id === item.id)))}>
                                <Entypo name="shopping-cart" size={24} color="silver" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>{
                                handle(item)
                                dispatch(changeFav(item))
                                }}>
                                <Entypo name="heart" size={24} color={CoursesColor[item.id]} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
          )} keyExtractor={item => item.id}/>
    )
}

const styles = StyleSheet.create({
    item:{
        padding: 20,
        marginVertical: 10,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 20,
        backgroundColor: StyleConstants.mainColor,
        flexDirection:"row"
        
      },
    imageView1:{
        //For instagram images
        //flex:1,
        height:225,
        width:203,
        maxWidth:'100%',
        maxHeight:"100%",
        minHeight:"50%",
        minWidth:"50%",
        borderRadius: 20,
        alignSelf:"center"
    },
    info:{
        justifyContent: "space-between",
    },
    bottoms:{
        flexDirection:"row",
        paddingLeft:5,
        alignItems:"flex-start"
    }
})

export default MainList