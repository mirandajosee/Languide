import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text,TextInput,Button,FlatList, View, Modal } from 'react-native';

export default function App() {
  const CoursesList = [{value: "Japonés", id: Math.random().toString()},{value: "Ruso básico", id: Math.random().toString()},{value: "Ruso preintermedio", id: Math.random().toString()},{value: "Inglés A1", id: Math.random().toString()}, {value: "Inglés avanzado", id: Math.random().toString()}, {value: "Japonés N5", id: Math.random().toString()},{value: "Japonés N4", id: Math.random().toString()}]
  const [FavCoursesList,setFavCoursesList]= useState(CoursesList)
  const [textInput,setTextInput] = useState('');
  const [itemList,setItemList] = useState(FavCoursesList);
  const [itemSelected, setItemSelected]=useState({});
  const [modalVisible, setModalVisible] = useState(false)
  const handleChangeText = (text) =>{setTextInput(text)};
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
  const handleSearch= (searchText) =>{
    setTextInput('')
    let filteredList = FavCoursesList.filter(function(item) {return item.value.includes(searchText)})
    setItemList(filteredList)
    setModalVisible(false)
    setItemSelected({})
  }

  const handleViewFavs= () => {setItemList(FavCoursesList)}

  return (
    <View style={styles.container}>
      <View style={styles.actions}>
        <Text style={styles.uppertext}>
          TUS FAVORITOS
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} value={textInput} placeholder='Busca un favorito' placeholderTextColor={"silver"} onChangeText={handleChangeText}/>
        <Button onPress={() => handleSearch(textInput)} title='Buscar' />
      </View>

      <FlatList data={itemList} renderItem={({item}) => (
        <View style={styles.item}>
        <Text style={{color: "white", fontSize:20}}>{item.value}</Text>
        <Button onPress={() => handleOnDelete(item)} title='X' />
        </View>
      )} keyExtractor={item => item.id}/>
      
      <Modal animationType='slide' visible={modalVisible} transparent={true} > 
        <View style={styles.modal}>
          <View>
            <Text style={styles.textwhite}>¿Está seguro de que desea eliminar?</Text>
            <Text style={styles.textwhite}>{itemSelected.value}</Text>
          </View>
          <View>
            <Button onPress={handleConfirmDelete} title="Confirmar" />
          </View>
        </View>
      </Modal>
      <View style={styles.actions}>
        <Button onPress={handleViewFavs} title='favoritos' />

      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //alignContent: 'flex-start',
    backgroundColor: 'skyblue',
    //alignItems: 'center',
    padding: 30
  },
  inputContainer:{
    flexDirection: "row",
  },
  input:{
    borderBottomColor:"black",
    flex:1,
    borderBottomWidth: 1,
    marginRight:20,
    color: "black",
    backgroundColor: "white",
    padding: 10,
  },
  item:{
    padding: 20,
    marginVertical: 20,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: "royalblue",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  modal: {
    backgroundColor: "darkred",
    padding: 10,
    alignItems: "center",
    alignContent: "center",
    borderColor: "black",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 20,
    marginHorizontal: 30,
  },
  textwhite: {
    fontSize: 20,
    color: "white",
    alignItems: "center",
    marginVertical: 10,
  },
  actions:{
    flexDirection: "row",
    justifyContent: "space-around",
  },
  uppertext:{
    alignItems:"center",
    fontSize:30,
    color: "royalblue",
    marginVertical: 20,
  }
});
