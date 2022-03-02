import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FavListScreen from '../Screens/FavListScreen';
import CoursesListScreen from '../Screens/CoursesListScreen';
import CoursesDetailScreen from '../Screens/CoursesDetailScreen';
import { Platform, StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();

function ShopNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Cursos"
        screenOptions={{
          headerStyle: styles.header,
          headerTitleStyle: styles.headerTitle,
          headerTintColor: Platform.OS === 'ios' ? "royalblue" : 'white'
        }}
      >
        <Stack.Screen
          name="Información"
          component={CoursesDetailScreen}
          options={({ route }) => ({
            title: route.params.value,
          })}
        />
        <Stack.Screen
          name="Courses"
          component={CoursesListScreen}
          options={({ route }) => ({
            title: route.params.value,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: Platform.OS === 'ios' ? 'white' : COLORS.primary,
  },
  headerTitle: {
    fontWeight: 'bold',
  }
})

export default CoursesNavigator;