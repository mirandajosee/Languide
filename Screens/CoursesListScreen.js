import React, { useEffect, useState } from 'react';
import {StyleSheet,Text,View,Button} from "react-native"
import MainList from "../Components/List"
import StyleConstants from "../Constants/StyleConstants"
import Search from "../Components/Search/Search"
import CoursesList from "../Components/Search/Courses"
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useSelector,useDispatch } from 'react-redux';
import { selectFilter } from '../store/actions/itemlist.action';
import { FILTERS } from '../data/filters';

function CoursesListScreen({handleChangeFav,handleSearch,textInput, handleChangeText,navigation}) {
    const dispatch = useDispatch()
    let itemList=useSelector((state)=> state.itemlist.list)
    return(
        <View style={styles.container}>
            <View style={{flexDirection:"row", alignItems:"center",justifyContent:"space-around"}} >
                <Button title={"Cursos"} onPress={()=>{dispatch(selectFilter(""))}}/>
                <Button title={"Favoritos"} onPress={()=>{dispatch(selectFilter("Fav"))}}/>
                <Button title={"Japonés"} onPress={()=>{dispatch(selectFilter(FILTERS[2].id))}}/>
                <Button title={"Inglés"} onPress={()=>{dispatch(selectFilter(FILTERS[3].id))}}/>
            </View>
            <Search handleSearch={handleSearch} textInput={textInput} handleChangeText={handleChangeText}/>
        
            <MainList itemList={itemList} handle={handleChangeFav} navigation={navigation} />
        </View>
    )
}
const styles = StyleSheet.create({
    ListScreen:{
        flex:1,
        height:70
    },
    container: {
        backgroundColor: StyleConstants.secondaryColor,
        flex:1,
        padding: 30,
        paddingBottom:0
      }
})

export default CoursesListScreen