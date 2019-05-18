import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { createBottomTabNavigator } from 'react-navigation';

import Icon from 'react-native-vector-icons/Ionicons';
import Explore from './screens/Explore';
import Saved from './screens/Saved';
import Inbox from './screens/Inbox';
import Preaching from './screens/Preaching';
import Profile from './screens/Profile';

export default createBottomTabNavigator({
  Explore: {
    screen: Explore,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-home" color={tintColor} size={24} />
      ),
    },
  },
  Saved: {
    screen: Saved,
     navigationOptions: {
      tabBarLabel: 'Events',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-calendar" color={tintColor} size={24} />
      ),
    },
  },
  Preaching: {
    screen: Preaching,
     navigationOptions: {
      tabBarLabel: 'Preaching',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-book" color={tintColor} size={24} />
      ),
    },
  },
  Inbox: {
    screen: Inbox,
     navigationOptions: {
      tabBarLabel: 'Inbox',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-chatboxes" color={tintColor} size={24} />
      ),
    },
  },
  Profile: {
    screen: Profile,
     navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-person" color={tintColor} size={24} />
      ),
    },
  },
  
},{
    tabBarOptions:{
      activeTintColor:'red',
      inactiveTintColor:'grey',
      style:{
        backgroundColor:'white',
        borderTopWidth:0,
        shadowOffset:{width:5,height:3},
        shadowOpacity:0.5,
        elevation:5
      }
    }
  },);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
