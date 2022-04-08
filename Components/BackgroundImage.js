import React,{Component} from "react";
import {View,Image,StyleSheet,Dimensions} from 'react-native';
import StyleConstants from "../Constants/StyleConstants";

export default class BackgroundImage extends Component {
    render() {
        const styles = StyleSheetFactory.getSheet(this.props.opacity);
        return(
            <View style={{...styles.imageContainer,...this.props.style}}>
                <Image style={styles.bgImage} source={this.props.imageSource} />
                {this.props.children}
            </View>
        );
    }
}

class StyleSheetFactory {
    static getSheet(opacity) {
        return StyleSheet.create({
            imageContainer:{
                backgroundColor: StyleConstants.secondaryColor,
                flex:1,
                padding: 30,
                paddingBottom:0,
                opacity:1
            },
            bgImage: {
                flex:1,
                position: 'absolute',
                zIndex:0,
                width:Dimensions.get('window').width,
                height:Dimensions.get('window').height,
                opacity
            }
        })
    }
}