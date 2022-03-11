import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons'; 
import CoursesNavigator from './CoursesNavigator';
import CartNavigator from './CartNavigator';
import CoursesList from '../Components/Search/Courses';
import { NavigationContainer } from '@react-navigation/native';


const Tab = createBottomTabNavigator()

function TabNavigator({mainRoute,handleChangeFav,itemList,handleAddFav,handleSearch,textInput,itemSelected, handleChangeText,handleCloseModal,modalVisible,handleConfirmDelete,handleOnDelete,handleSearchFav}) {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="CoursesTab"
        screenOptions={{
          headerShown: false,
          tabBarStyle: styles.tabBar,
          tabBarActiveTintColor:"white",
        }}
      >
          <Tab.Screen
              name="CoursesTab"
              children={() => <CoursesNavigator handleChangeFav={handleChangeFav} mainRoute={"Courses"} itemList={itemList} handleAddFav={handleAddFav} handleConfirmDelete={handleConfirmDelete} handleSearch={handleSearch} textInput={textInput} handleChangeText={handleChangeText} FavCoursesList={CoursesList.filter(function(item) {return item.isFav==true})} modalVisible={modalVisible} handleCloseModal={handleCloseModal} itemSelected={itemSelected} handleOnDelete={handleOnDelete} handleSearchFav={handleSearchFav}/>}
              options={{
              tabBarStyle:{...styles.tabBar,...{position:"relative"}},
              tabBarLabel: "Cursos",
              tabBarIcon: ({ focused }) => (
                  <View style={styles.item}>
                  <Entypo
                      name="home"
                      size={24}
                      color={focused ? 'white' : 'silver'}
                  />
                  </View>
              )
              
              }}
          />
        <Tab.Screen
          name="CartTab"
          component={CartNavigator}
          options={{
            tabBarLabel: "Carrito",
            tabBarIcon: ({ focused }) => (
              <View style={styles.item}>
                <Entypo
                  name="shopping-cart"
                  size={24}
                  color={focused ? 'white' : 'silver'}
                />
              </View>
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    backgroundColor:"#333",
    height: 70,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 0.25,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default TabNavigator;