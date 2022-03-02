import React from "react"
import {StyleSheet, Text,TextInput,Button, View} from "react-native"
import StyleConstants from "../../Constants/StyleConstants"

function Search({handleSearch,textInput,handleChangeText,title}) {
    return (
        <View>
            <View style={styles.actions}>
            <Text style={{...styles.uppertext}}>
                {title}
            </Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} value={textInput} placeholder='Ingresa tu búsqueda' placeholderTextColor={"silver"} onChangeText={handleChangeText}/>
              <Button onPress={() => handleSearch(textInput)} title='Buscar' />
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
    inputContainer:{
        flexDirection: "row",
        marginVertical:10,
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