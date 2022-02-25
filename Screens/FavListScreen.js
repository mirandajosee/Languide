import React from "react"
import {StyleSheet,Text,View} from "react-native"
import MainList from "../Components/List"
import Search from "../Components/Search/Search"
import NoFavsScreen from "./NoFavsScreen"

function FavListScreen({itemList,FavCoursesList,handleOnDelete,handleSearchFav,textInput, handleChangeText}) {
    return(
        <View style={styles.ListScreen}>
            <Search handleSearch={handleSearchFav} textInput={textInput} handleChangeText={handleChangeText} title="TUS FAVORITOS"/>
            {(JSON.stringify(FavCoursesList))==JSON.stringify([])? (<NoFavsScreen/>)
            :
            (<MainList itemList={itemList} handle={handleOnDelete} buttonTitle={"x"} />)}
        </View>
    )
}

const styles = StyleSheet.create({
    ListScreen:{
        flex:1
    }
})

export default FavListScreen