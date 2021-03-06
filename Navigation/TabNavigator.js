import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons'; 
import CoursesNavigator from './CoursesNavigator';
import CartNavigator from './CartNavigator';
import OrdersScreen from '../Screens/OrdersScreen';


const Tab = createBottomTabNavigator()

function TabNavigator() {
  return (
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
              children={() => <CoursesNavigator />}
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
        <Tab.Screen
          name="OrdersTab"
          component={OrdersScreen}
          options={{
            tabBarLabel: "Tus Pagos",
            tabBarIcon: ({ focused }) => (
              <View style={styles.item}>
                <Entypo
                  name="list"
                  size={24}
                  color={focused ? 'white' : 'silver'}
                />
              </View>
            )
          }}
        />
      </Tab.Navigator>
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