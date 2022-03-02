import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native'
import CoursesList from '../Components/Search/Courses';

function CoursesDetailScreen() {
  const route = useRoute();
  const course = CoursesList.find(item => item.id === route.params.courseID)

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.title}>{course.value}</Text>
        <Text>{course.description}</Text>
        <Text>{course.price}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  info: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
})

export default CoursesDetailScreen