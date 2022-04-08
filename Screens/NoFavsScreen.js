import React from "react"
import {StyleSheet,Text,View,Image,ScrollView} from "react-native"
import StyleConstants from "../Constants/StyleConstants"

function NoFavsScreen() {
    return(
        <ScrollView>
            <View style={styles.CenteredContent}>
                <Image source={require('../assets/NoFavsImage.png')} style={{width:250, height:250,alignSelf:"center"}}/>
                <Text style={styles.MessageText}>Aún no tienes favoritos</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    CenteredContent:{
        flex:1,
        alignItems:"center",
        justifyContent: "center",
        textAlignVertical:"center"
    },
    MessageText:{
        color: StyleConstants.mainColor,
        fontSize:40,
        fontFamily:StyleConstants.mainFont,
        textAlign:"center",
        backgroundColor: StyleConstants.terciaryColor,
        borderWidth:1,
        borderRadius:15,
        padding:20,
        shadowColor:"#0f4a82",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        
        elevation: 10,
        

    }
})

export default NoFavsScreen