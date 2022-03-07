import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import { useRoute } from '@react-navigation/native'
import CoursesList from '../Components/Search/Courses';
import StyleConstants from '../Constants/StyleConstants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function CoursesDetailScreen() {
  const route = useRoute();
  const course = CoursesList.find(item => item.id === route.params.courseID)

  return (
    <View style={styles.container}>
      <View>
        <Image source={{uri:course.onlineImage}} style={StyleConstants.imageView3} />
      </View>
      <View style={styles.info}>
        <Text style={styles.title}>{course.value}</Text>
        <Text style={styles.description}>{course.description}</Text>
        <Text style={styles.price}>{course.price}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: StyleConstants.secondaryColor,
    flex:1,
    padding: 30,
    paddingBottom:0
  },
  info: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: StyleConstants.titleFontSize,
    marginBottom: 10,
    color:StyleConstants.mainColor,
    fontFamily:StyleConstants.mainFont,
    fontSize:50
  },
  price: {
    marginBottom: 10,
    color:StyleConstants.mainColor,
    fontFamily:StyleConstants.mainFont,
    fontSize:StyleConstants.titleFontSize,
    borderWidth:1,
    borderColor:"black",
    backgroundColor:StyleConstants.terciaryColor,
    padding:10
  },
  description:{
    color:"black",
    fontSize:15,
    fontFamily:StyleConstants.secondaryFont,
    marginVertical:20
  }
})

export default CoursesDetailScreen