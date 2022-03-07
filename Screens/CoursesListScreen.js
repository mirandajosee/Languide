import React from "react"
import {StyleSheet,Text,View} from "react-native"
import MainList from "../Components/List"
import StyleConstants from "../Constants/StyleConstants"
import Search from "../Components/Search/Search"
import CoursesList from "../Components/Search/Courses"
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

//{itemList,handleAddFav,handleSearch,textInput, handleChangeText}
function CoursesListScreen({itemList,handleAddFav,handleSearch,textInput, handleChangeText,navigation}) {
    return(
        <View style={styles.container}>
            <Search handleSearch={handleSearch} textInput={textInput} handleChangeText={handleChangeText}/>
        
            <MainList itemList={itemList} handle={handleAddFav} buttonTitle={"❤️"} navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    ListScreen:{
        flex:1,
    },
    container: {
        backgroundColor: StyleConstants.secondaryColor,
        flex:1,
        padding: 30,
        paddingBottom:0
      }
})

export default CoursesListScreen