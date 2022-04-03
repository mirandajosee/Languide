import React, { useEffect } from 'react';
import { Entypo } from '@expo/vector-icons';
import { View, Text, StyleSheet,Image,TouchableOpacity,ScrollView,Button } from 'react-native';
import { useRoute } from '@react-navigation/native'
import CoursesList from '../Components/Search/Courses';
import StyleConstants from '../Constants/StyleConstants';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../store/actions/cart.actions';
import { changeFav } from '../store/actions/favcolors.action';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps'

function CoursesDetailScreen() {
  const dispatch = useDispatch()
  const route = useRoute();
  const course = CoursesList.find(item => item.id === route.params.courseID)
  const handlerAddItemCart = () => dispatch(addItem(course))
  const courseLocation = course.coordinates
  const [deltaDistance,setDeltaDistance] = useState([])
  const [locationAllowed,setLocationAllowed]= useState(false)
  const CourseColor=useSelector((state) => state.favcolor.Dictionary)
  const handleFav = (item) => {
    item.isFav=!item.isFav
  }
  const [pickedLocation, setPickedLocation] = useState({lat:0,lng:0});

  const verifyPermissions = async () => {
    try {
    const { status } = await Location.requestForegroundPermissionsAsync()
    if (status !== 'granted') {
      Alert.alert(
        'Permisos insuficientes',
        'Necesita dar permisos de la localización para usar la aplicación',
        [{ text: 'Ok' }],
      )

      return false;
    }

    return true;} catch (error) {
      console.log(error.message)
    }
  }

  const handleGetLocation = async () => {
    const isLocationOk = await verifyPermissions();
    setLocationAllowed(isLocationOk)
    if (!isLocationOk) return;

    const location = await Location.getLastKnownPositionAsync({
      timeout: 5000
    })
    setPickedLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    })
    setDeltaDistance([Math.abs(pickedLocation.lat-courseLocation[0]),Math.abs(pickedLocation.lng-courseLocation[1])])
    ;}
    if (deltaDistance==undefined || (JSON.stringify(deltaDistance))==JSON.stringify([])){
      handleGetLocation()
    }

  return (
    <ScrollView >
      <View style={styles.container}>
        <View style={{marginBottom:50}}>
          <Image source={{uri:course.onlineImage}} style={StyleConstants.imageView3} />
          <View style={styles.subimage}>
          <TouchableOpacity onPress={()=>{
                              handleFav(course)
                              dispatch(changeFav(course))
                              }}>
                              <Entypo name="heart" size={24} color={CourseColor[course.id]} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handlerAddItemCart}>
              <Entypo name="shopping-cart" size={24} color="silver" />
          </TouchableOpacity>
          </View>
        </View>
        <View style={styles.info}>
          <Text style={styles.title}>{course.value}</Text>
          <Text style={styles.description}>{course.description}</Text>
          <Text style={styles.price}>Precio por mes: ${course.price}</Text>
          {locationAllowed?
          <View style={{flex:1}}> 
            <MapView
            initialRegion={{latitude:courseLocation[0],longitude:courseLocation[1],latitudeDelta:JSON.stringify(deltaDistance)!=JSON.stringify([])?(deltaDistance[0]):(0.0922),longitudeDelta:JSON.stringify(deltaDistance)!=JSON.stringify([])?(deltaDistance[1]):(0.0421)}}
            style={{flex:1,width: 300,height: 300}}
            onPress={handleGetLocation}
            showsUserLocation={true}
            showsMyLocationButton={true}
            >
            {
              <Marker title="Instituto" coordinate={{
                  latitude: courseLocation[0],
                  longitude: courseLocation[1]
              }} />
            }
            </MapView>
            {JSON.stringify(deltaDistance)!=JSON.stringify([])?
            <Text style={{...styles.description,color:"white",backgroundColor:StyleConstants.mainColor,padding:5,borderRadius:10}}>
              Tu distancia al Instituto es aproximadamente {(((deltaDistance[0]**2+deltaDistance[1]**2)**(0.5))*(6378.137*Math.PI/180)).toFixed(2)}km
            </Text>:
            <Text style={{...styles.description,color:"white",backgroundColor:StyleConstants.mainColor,padding:5,borderRadius:10}}>
            Cargando distancia...
            </Text>}
          </View>
          :
          <View style={{flex:1}}> 
            <MapView
            initialRegion={{latitude:courseLocation[0],longitude:courseLocation[1],latitudeDelta:0.0922,longitudeDelta:0.0421}}
            style={{flex:1,width: 300,height: 300}}
            onPress={handleGetLocation}
            showsUserLocation={false}
            showsMyLocationButton={false}
            >
            {
              <Marker title="Instituto" coordinate={{
                  latitude: courseLocation[0],
                  longitude: courseLocation[1]
              }} />
            }
            </MapView>
          </View>}
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: StyleConstants.secondaryColor,
    flex:1,
    padding: 30,
    paddingBottom:0
  },
  subimage:{
    flex:1,
    flexDirection:"row-reverse",
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    backgroundColor: StyleConstants.mainColor,
    padding:10,
    marginBottom:20
  },
  info: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: StyleConstants.titleFontSize,
    marginBottom: 10,
    color:StyleConstants.mainColor,
    fontFamily:StyleConstants.mainFont,
    fontSize:50,
    textAlign:"center"
  },
  price: {
    marginBottom: 10,
    color:StyleConstants.mainColor,
    fontFamily:StyleConstants.mainFont,
    fontSize:StyleConstants.titleFontSize,
    borderWidth:1,
    borderColor:"black",
    backgroundColor:StyleConstants.terciaryColor,
    padding:10,
    textAlign:"center"
  },
  description:{
    color:"black",
    fontSize:20,
    fontFamily:StyleConstants.secondaryFont,
    marginVertical:20
  }
})

export default CoursesDetailScreen