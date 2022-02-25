import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,Button, View} from 'react-native';
import Search from './Components/Search/Search';
import { useState } from 'react';
import CoursesList from './Components/Search/Courses';
import ModalItem from './Components/Modal/Modal';
import NoFavsScreen from './Screens/NoFavsScreen';
import FavListScreen from './Screens/FavListScreen';
import CoursesListScreen from './Screens/CoursesListScreen';
import MainList from './Components/List';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded]=useFonts({Boogaloo:require('./assets/Fonts/Boogaloo-Regular.ttf')})
  const [FavCoursesList,setFavCoursesList]= useState([])
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
    if (!FavCoursesList.includes(item)) {
    setFavCoursesList([...FavCoursesList,item])}
  }
  const handleConfirmDelete= () =>{
    const {id} = itemSelected
    setFavCoursesList(FavCoursesList.filter(item => item.id !== id))
    setItemList(itemList.filter(item => item.id !== id))
    setModalVisible(false)
    setItemSelected({})
  }
  const handleSearchFav= (searchText) =>{
    setTextInput('')
    let filteredList = FavCoursesList.filter(function(item) {return item.value.includes(searchText)})
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
    setItemList(FavCoursesList)
    console.log((FavCoursesList)==[])
  }
  const handleViewCourses= () => {
    setCurrentScreen("Courses")
    setItemList(CoursesList)
  }

  if (!loaded) return <AppLoading />
  return ( 
    <View style={styles.container}>
      {currentScreen==="Fav-Courses"? (
      <View style={{flex:1}}>
        <FavListScreen FavCoursesList={FavCoursesList} handleOnDelete={handleOnDelete} handleSearchFav={handleSearchFav} titleStyle= {{fontFamily: "Boogaloo"}} textInput={textInput} handleChangeText={handleChangeText} />
        <ModalItem handleConfirmDelete={handleConfirmDelete} modalVisible={modalVisible} itemSelected={itemSelected} />
      </View>
      ) : (null)
      }

    {currentScreen==="Courses"? (
      <View style={{flex:1}}>
        <CoursesListScreen handleAddFav={handleAddFav} itemList={itemList} handleSearch={handleSearch} titleStyle= {{fontFamily: "Boogaloo"}} textInput={textInput} handleChangeText={handleChangeText} />
      </View>
      ) : (null)
    }

    <View style={styles.actions}>
      <Button onPress={handleViewFavs} title='favoritos' />
      <Button onPress={handleViewCourses} title='cursos' />
    </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'skyblue',
    flex:1,
    padding: 30,
    paddingBottom:0
  },
  actions:{
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "center",
    alignItems: "flex-end"
  }
});
