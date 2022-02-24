import React from "react"
import {StyleSheet,Text,View} from "react-native"
import MainList from "../Components/List"
import Search from "../Components/Search/Search"
import CoursesList from "../Components/Search/Courses"

function CoursesListScreen(handleAddFav,handleSearch,textInput, handleChangeText) {
    return(
        <View style={styles.ListScreen}>
            <Search handleSearch={handleSearch} textInput={textInput} handleChangeText={handleChangeText} title="CURSOS"/>
        
            <MainList itemList={CoursesList} handle={()=>{}} />
            
        </View>
    )
}

const styles = StyleSheet.create({
    ListScreen:{
        flex:1
    }
})

export default CoursesListScreen