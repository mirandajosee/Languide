import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FavListScreen from '../Screens/FavListScreen';
import CoursesListScreen from '../Screens/CoursesListScreen';
import CoursesDetailScreen from '../Screens/CoursesDetailScreen';
import { Platform, StyleSheet } from 'react-native';
import CoursesList from '../Components/Search/Courses';

const Stack = createNativeStackNavigator();

function CoursesNavigator({mainRoute,itemList,handleAddFav,handleSearch,textInput,itemSelected, handleChangeText,handleCloseModal,modalVisible,handleConfirmDelete,handleOnDelete,handleSearchFav}) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={mainRoute}
        screenOptions={{
          headerStyle: styles.header,
          headerTitleStyle: styles.headerTitle,
          headerTintColor: Platform.OS === 'ios' ? "royalblue" : 'white'
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
          {(props) => <CoursesListScreen {...props} itemList={itemList} handleAddFav={handleAddFav} handleSearch={handleSearch} textInput={textInput} handleChangeText={handleChangeText} />}
        </Stack.Screen>
        <Stack.Screen
          name="Fav-Courses"
          options={({ route }) => ({
            title: "TUS FAVORITOS",
          })}
        >
          {(props) => <FavListScreen {...props} itemList={itemList} FavCoursesList={CoursesList.filter(function(item) {return item.isFav==true})} handleConfirmDelete={handleConfirmDelete} modalVisible={modalVisible} handleCloseModal={handleCloseModal} itemSelected={itemSelected} handleOnDelete={handleOnDelete} handleSearchFav={handleSearchFav} textInput={textInput} handleChangeText={handleChangeText} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: Platform.OS === 'ios' ? 'white' : 'royalblue',
  },
  headerTitle: {
    fontWeight: 'bold',
  },
})

export default CoursesNavigator;