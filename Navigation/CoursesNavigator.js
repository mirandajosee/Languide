import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FavListScreen from '../Screens/FavListScreen';
import CoursesListScreen from '../Screens/CoursesListScreen';
import CoursesDetailScreen from '../Screens/CoursesDetailScreen';
import { Platform, StyleSheet } from 'react-native';
import CoursesList from '../Components/Search/Courses';
import StyleConstants from '../Constants/StyleConstants';

const Stack = createNativeStackNavigator();

function CoursesNavigator({mainRoute,handleChangeFav,handleSearch,textInput,itemSelected, handleChangeText,handleCloseModal,modalVisible,handleConfirmDelete,handleOnDelete,handleSearchFav}) {
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
            title: "CURSOS",
          })}
        >
          {(props) => <CoursesListScreen {...props} handleChangeFav={handleChangeFav} handleConfirmDelete={handleConfirmDelete} handleSearch={handleSearch} textInput={textInput} handleChangeText={handleChangeText} />}
        </Stack.Screen>
        <Stack.Screen
          name="Fav-Courses"
          options={({ route }) => ({
            title: "TUS FAVORITOS",
            headerShown:false
          })}
        >
          {(props) => <FavListScreen {...props}  handleConfirmDelete={handleChangeFav} modalVisible={modalVisible} handleCloseModal={handleCloseModal} itemSelected={itemSelected} handleSearchFav={handleSearchFav} textInput={textInput} handleChangeText={handleChangeText} />}
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