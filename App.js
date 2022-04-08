import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import { useState } from 'react';
import CoursesList from './Components/Search/Courses';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import StyleConstants from './Constants/StyleConstants';
import { Provider } from 'react-redux';
import store from './store';
import MainNavigator from './Navigation/NavIndex';
import { NavigationContainer } from '@react-navigation/native';
import {init} from "./data/localdatabase"

export default function App() {
  const [loaded]=useFonts({Boogaloo:require('./assets/Fonts/Boogaloo-Regular.ttf')})
  const [loaded1]=useFonts({Rubik:require('./assets/Fonts/Rubik-VariableFont_wght.ttf')})
  const [itemList,setItemList] = useState(CoursesList);
  const [itemSelected, setItemSelected]=useState({});
  const [modalVisible, setModalVisible] = useState(false)
  const handleOnDelete = (item) => {
    setModalVisible(true)
    setItemSelected(item)
  }
  const handleConfirmDelete= () =>{
    itemSelected.isFav=false
    const {id} = itemSelected
    setItemList(itemList.filter(item => item.id !== id))
    setModalVisible(false)
    setItemSelected({})
    console.log(item.isFav)
  }
  const handleCloseModal=() => {
    setModalVisible(false)
  }


  init()
  .then(() => { console.log('Database initialized') })
  .catch((err) => {
    console.log('Database failed to connect')
    console.log(err.message)
  })

  if (!loaded && !loaded1) return <AppLoading />
  return ( 
    <Provider store={store}>
      <NavigationContainer>
        <View style={styles.container}>
          <MainNavigator />
        </View>
      </NavigationContainer>
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: StyleConstants.secondaryColor,
    flex:1,
    //padding: 30,
    paddingBottom:0
  },
  actions:{
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "center",
    alignItems: "flex-end"
  }
});
