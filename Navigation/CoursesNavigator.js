import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CoursesListScreen from '../Screens/CoursesListScreen';
import CoursesDetailScreen from '../Screens/CoursesDetailScreen';
import { Platform, StyleSheet } from 'react-native';
import StyleConstants from '../Constants/StyleConstants';

const Stack = createNativeStackNavigator();

function CoursesNavigator() {
  return (
      <Stack.Navigator
        initialRouteName={"Courses"}
        screenOptions={{
          headerStyle: styles.header,
          headerTitleStyle: styles.headerTitle,
          headerTintColor: Platform.OS === 'ios' ? StyleConstants.mainColor  : 'white'
        }}
      >
        <Stack.Screen
          name="Info"
          component={CoursesDetailScreen}
          options={({ route }) => ({
            title: route.params.name,
          })}
        />
        <Stack.Screen
          name="Courses"
          options={({ route }) => ({
            title: "Cursos",
          })}
        >
          {(props) => <CoursesListScreen {...props}/>}
        </Stack.Screen>
      </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: Platform.OS === 'ios' ? 'white' : StyleConstants.mainColor,
  },
  headerTitle: {
    fontFamily:StyleConstants.mainFont,
    fontWeight: 'bold',
  },
})

export default CoursesNavigator;