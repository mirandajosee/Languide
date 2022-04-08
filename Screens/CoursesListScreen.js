import React, { useEffect, useState } from 'react';
import {StyleSheet,View,ImageBackground,Dimensions} from "react-native"
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
import BackgroundImage from '../Components/BackgroundImage';
import NoFavsScreen from './NoFavsScreen';

function CoursesListScreen({navigation}) {
    const dispatch = useDispatch()
    let itemList=useSelector((state)=> state.itemlist.list)
    let filter = useSelector((state)=> state.itemlist.SelectedFilter)
    const handleChangeFav = (item) => {
        item.isFav=!item.isFav
      }
    return(
    <BackgroundImage imageSource={require('../assets/oldmap.jpg')} opacity={0.4}>
        
            <MultiSelect items={FILTERS} single={true} uniqueKey="id" displayKey='title' onSelectedItemsChange={(selectedItem)=>{dispatch(selectFilter(selectedItem[0]))}} selectText="Elige un filtro" styleTextDropdown={{marginHorizontal:10}} styleDropdownMenu={{borderRadius:10, borderBottomColor:"black",borderBottomWidth:1}} styleDropdownMenuSubsection={{borderRadius:10}} />
            <Search/>
            {filter=="Fav" && JSON.stringify(itemList)==JSON.stringify([])?
            <NoFavsScreen />
            :
            <MainList itemList={itemList} handle={handleChangeFav} navigation={navigation} />}
    </BackgroundImage>
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
        paddingBottom:0,
        opacity:1
      }
})

export default CoursesListScreen