import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,Button, View} from 'react-native';
import { useState } from 'react';
import CoursesList from './Components/Search/Courses';
import ModalItem from './Components/Modal/Modal';
import FavListScreen from './Screens/FavListScreen';
import CoursesListScreen from './Screens/CoursesListScreen';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import StyleConstants from './Constants/StyleConstants';
import CoursesNavigator from './Navigation/CoursesNavigator'
import TabNavigator from './Navigation/TabNavigator';

export default function App() {
  const [loaded]=useFonts({Boogaloo:require('./assets/Fonts/Boogaloo-Regular.ttf')})
  const [loaded1]=useFonts({Rubik:require('./assets/Fonts/Rubik-VariableFont_wght.ttf')})
  const [textInput,setTextInput] = useState('');
  const [itemList,setItemList] = useState(CoursesList);
  const [itemSelected, setItemSelected]=useState({});
  const [modalVisible, setModalVisible] = useState(false)
  const [currentScreen,setCurrentScreen]=useState("Courses")
  const handleChangeText = (text) => {setTextInput(text)}
  const handleOnDelete = (item) => {
    setModalVisible(true)
    setItemSelected(item)
  }
  const handleAddFav = (item) => {
    item.isFav=true
    console.log(item.isFav)
  }
  const handleRemoveFav = (item) => {
    item.isFav=false
    console.log(item.isFav)
  }
  const handleChangeFav = (item) => {
    item.isFav=!item.isFav
    console.log(item.isFav)
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
  const handleSearchFav= (searchText) =>{
    setTextInput('')
    let filteredList = (CoursesList.filter(function(item) {return item.isFav==true})).filter(function(item) {return item.value.includes(searchText)})
    setItemList(filteredList)
    setModalVisible(false)
    setItemSelected({})
  }
  const handleSearch= (searchText) =>{
    setTextInput('')
    let filteredList = CoursesList.filter(function(item) {return item.value.includes(searchText)})
    setItemList(filteredList)
    setModalVisible(false)
    setItemSelected({})
  }

  const handleViewFavs= () => {
    setCurrentScreen("Fav-Courses")
    setItemList(CoursesList.filter(function(item) {return item.isFav==true}))
  }
  const handleViewCourses= () => {
    setCurrentScreen("Courses")
    setItemList(CoursesList)
  }

  if (!loaded && !loaded1) return <AppLoading />
  return ( 
    <View style={styles.container}>
      <TabNavigator itemList={itemList} handleChangeFav={handleChangeFav} handleAddFav={handleAddFav} handleConfirmDelete={handleRemoveFav} handleSearch={handleSearch} textInput={textInput} handleChangeText={handleChangeText} />
    </View>
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
