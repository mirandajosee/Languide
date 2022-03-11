import React from "react"
import {StyleSheet,Text,View} from "react-native"
import MainList from "../Components/List"
import StyleConstants from "../Constants/StyleConstants"
import Search from "../Components/Search/Search"
import NoFavsScreen from "./NoFavsScreen"
import ModalItem from "../Components/Modal/Modal"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function FavListScreen({itemList,FavCoursesList,handleOnDelete,handleAddFav,handleSearchFav,textInput, handleChangeText,navigation,handleConfirmDelete,modalVisible,handleCloseModal,itemSelected}) {
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
                (<MainList itemList={itemList} handle1={handleAddFav} handle2={handleOnDelete} navigation={navigation} />)}
            </View>
            <ModalItem handleConfirmDelete={handleConfirmDelete} handleCloseModal={handleCloseModal} modalVisible={modalVisible} itemSelected={itemSelected}/>
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