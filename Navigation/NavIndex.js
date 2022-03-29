import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import {View} from 'react-native'
import TabNavigator from './TabNavigator';
import AuthNavigator from './AuthNavigator';

function MainNavigator(handleChangeFav,handleSearch,textInput,itemSelected, handleChangeText,handleCloseModal,modalVisible,handleConfirmDelete,handleOnDelete,handleSearchFav,handleRemoveFav) {
  const isAuthenticated = useSelector(state => state.auth.token);

  return (
    <View style={{flex:1}}>
    {isAuthenticated?
        <TabNavigator handleSearchFav={handleSearchFav}  handleChangeFav={handleChangeFav} handleConfirmDelete={handleRemoveFav} handleSearch={handleSearch} textInput={textInput} handleChangeText={handleChangeText} />
        :
        <AuthNavigator/>
    }
    </View>
  )
}
export default MainNavigator