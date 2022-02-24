import React from "react"
import {StyleSheet,Text,View} from "react-native"
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes"

function NoFavsScreen() {
    return(
        <View style={styles.CenteredContent}>
            <Text style={styles.MessageText}>Aún no tienes favoritos</Text>
        </View>
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
        color: "royalblue",
        fontSize:35,
        textAlign:"center"

    }
})

export default NoFavsScreen