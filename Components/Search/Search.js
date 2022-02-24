import React from "react"
import {StyleSheet, Text,TextInput,Button, View} from "react-native"
import CoursesList from "./Courses"

function Search({handleSearch,textInput,handleChangeText,title,titleStyle}) {
    return (
        <View>
            <View style={styles.actions}>
            <Text style={{...styles.uppertext,...titleStyle}}>
                {title}
            </Text>
            </View>
            <View style={styles.inputContainer}>
            <TextInput style={styles.input} value={textInput} placeholder='Busca un favorito' placeholderTextColor={"silver"} onChangeText={handleChangeText}/>
            <Button onPress={() => handleSearch(textInput)} title='Buscar' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    uppertext:{
        alignItems:"center",
        fontSize:30,
        color: "royalblue",
        marginVertical: 20,
        fontFamily:'Boogaloo'
      },
    actions:{
        flexDirection: "row",
        justifyContent: "space-around",
      },
    inputContainer:{
        flexDirection: "row",
      },
    input:{
        borderBottomColor:"black",
        flex:1,
        borderBottomWidth: 1,
        marginRight:20,
        color: "black",
        backgroundColor: "white",
        padding: 10,
        borderRadius: 10
      }
    })

export default Search