import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import EditProfileScreen from './EditProfileScreen';
import Matches from './Matches';
import ChatLog from './ChatLog';
import Chat from './Chat';
import ChatScreen from './ChatScreen';




export default function App() {
  const [chatKey, setChatKey] = useState(false);
  
  const Tab = createBottomTabNavigator();
  const noIcon = ()=>false;

  return (
      <NavigationContainer>
        <Tab.Navigator>
          {/* <Tab.Screen name="Chat">{()=><ChatLog subjects={["Chemistry","Physics"]}/>}</Tab.Screen> */}
          <Tab.Screen name="Chat" component={ChatScreen} tabBarIcon={noIcon}/>
          <Tab.Screen name="My Profile" component={EditProfileScreen} tabBarIcon={noIcon} />
          <Tab.Screen name="Matches" component={Matches} tabBarIcon={noIcon}/>
        </Tab.Navigator>
        <Tab.Screen name = "Tab" component={ChatLog} TabBarIcon={noIcon}/>
      </NavigationContainer>
  );
  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
