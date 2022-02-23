import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,Button,FlatList, View} from 'react-native';
import Search from './Components/Search/Search';
import { useState } from 'react';
import CoursesList from './Components/Search/Courses';
import ModalItem from './Components/Modal/Modal';
import MainList from './Components/List';

export default function App() {
  const [FavCoursesList,setFavCoursesList]= useState(CoursesList)
  const [textInput,setTextInput] = useState('');
  const [itemList,setItemList] = useState(FavCoursesList);
  const [itemSelected, setItemSelected]=useState({});
  const [modalVisible, setModalVisible] = useState(false)
  const handleChangeText = (text) => {setTextInput(text)}
  const handleOnDelete = (item) => {
    setModalVisible(true)
    setItemSelected(item)
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

  const handleViewFavs= () => {setItemList(FavCoursesList)}

  return (
    <View style={styles.container}>
      <Search handleSearch={handleSearchFav} textInput={textInput} handleChangeText={handleChangeText} />

      <MainList itemList={itemList} handleOnDelete={handleOnDelete} />
      
      <ModalItem handleConfirmDelete={handleConfirmDelete} modalVisible={modalVisible} itemSelected={itemSelected} />

      <View style={styles.actions}>
        <Button onPress={handleViewFavs} title='favoritos' />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'skyblue',
    flex:1,
    padding: 30
  },
  actions:{
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "center",
    alignItems: "flex-end"
  }
});
