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
import MultiSelect from 'react-native-multiple-select';

function CoursesListScreen({handleChangeFav,handleSearch,textInput, handleChangeText,navigation}) {
    const dispatch = useDispatch()
    let itemList=useSelector((state)=> state.itemlist.list)
    return(
        <View style={styles.container}>
            <MultiSelect items={FILTERS} single={true} uniqueKey="id" displayKey='title' onSelectedItemsChange={(selectedItem)=>{dispatch(selectFilter(selectedItem[0]))}} selectText="Elige un filtro" styleTextDropdown={{marginHorizontal:10}} styleDropdownMenu={{borderRadius:10, borderBottomColor:"black",borderBottomWidth:1}} styleDropdownMenuSubsection={{borderRadius:10}} />
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