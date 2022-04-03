import React from "react"
import {StyleSheet, Text,TextInput,Button, View} from "react-native"
import StyleConstants from "../../Constants/StyleConstants"
import { useDispatch } from "react-redux"
import { SearchAction } from "../../store/actions/itemlist.action"
import { useState } from "react"

function Search() {
  const [textInput,setTextInput] = useState('')
  const handleChangeText = (text) => {setTextInput(text)}
  const dispatch=useDispatch()
    return (
        <View>
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} value={textInput} placeholder='Ingresa tu búsqueda' placeholderTextColor={"silver"} onChangeText={handleChangeText}/>
              <Button onPress={() => {dispatch(SearchAction(textInput)); setTextInput("")}} title='Buscar' color={StyleConstants.mainColor}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer:{
        flexDirection: "row",
        marginVertical:5,
      },
    input:{
        borderBottomColor:"black",
        flex:1,
        borderBottomWidth: 1,
        marginRight:20,
        color: "black",
        backgroundColor: "white",
        padding: 5,
        borderRadius: 10
      }
    })

export default Search