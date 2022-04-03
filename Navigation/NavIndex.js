import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {View} from 'react-native'
import TabNavigator from './TabNavigator';
import AuthNavigator from './AuthNavigator'
import { getUser } from '../store/actions/auth.action';

function MainNavigator() {
  const dispatch = useDispatch()
  const isAuthenticated = useSelector(state => state.auth.token);
  dispatch(getUser())
  return (
    <View style={{flex:1}}>
    {isAuthenticated?
        <TabNavigator />
        :
        <AuthNavigator/>
    }
    </View>
  )
}
export default MainNavigator