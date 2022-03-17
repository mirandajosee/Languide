import React from "react"
import { useState } from "react"
import {StyleSheet,Text,View} from "react-native"
import MainList from "../Components/List"
import StyleConstants from "../Constants/StyleConstants"
import Search from "../Components/Search/Search"
import NoFavsScreen from "./NoFavsScreen"
import ModalItem from "../Components/Modal/Modal"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ItemListReducer from "../store/reducers/itemlist.reducer"
import { useDispatch,useSelector } from "react-redux"
import CourseReducer from "../store/reducers/courses.reducer"

function FavListScreen({handleSearchFav,textInput, handleChangeText,navigation,handleConfirmDelete,modalVisible,handleCloseModal,itemSelected}) {
    const itemList=CourseReducer().list;
    const [FavCoursesList,setFavCourse] = useState(itemList.filter(function(item) {return item.isFav==true})) ;
    return(
        <View style={{flex:1}}>
            <View style={styles.container}>
                <View style={styles.actions}>
                    <Text style={{...styles.uppertext}}>
                        TUS FAVORITOS
                    </Text>
                </View>
                <Search handleSearch={handleSearchFav} textInput={textInput} handleChangeText={handleChangeText}/>
                {(JSON.stringify(FavCoursesList))==JSON.stringify([])? (<NoFavsScreen/>)
                :
                (<MainList itemList={FavCoursesList} handle={handleConfirmDelete} navigation={navigation} />)}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    uppertext:{
        alignItems:"center",
        fontSize:StyleConstants.titleFontSize,
        color: StyleConstants.mainColor,
        marginVertical: 0,
        fontFamily:StyleConstants.mainFont
      },
    actions:{
        flexDirection: "row",
        justifyContent: "space-around",
      },
    ListScreen:{
        flex:1
    },
    container: {
        backgroundColor: StyleConstants.secondaryColor,
        flex:1,
        padding: 30,
        paddingBottom:0
      }
})

export default FavListScreen