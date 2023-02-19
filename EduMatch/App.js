import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import EditProfile from './EditProfile';
import Matches from './Matches';
import ChatLog from './ChatLog';
import Chat from './Chat';
import ChatScreen from './ChatScreen';




export default function App() {
  const [chatKey, setChatKey] = useState(false);
  
  const Tab = createBottomTabNavigator();

  return (
      <NavigationContainer>
        <Tab.Navigator>
          {/* <Tab.Screen name="Chat">{()=><ChatLog subjects={["Chemistry","Physics"]}/>}</Tab.Screen> */}
          <Tab.Screen name="Chat" component={ChatScreen}>
            {/* {()=>(
              <Stack.Navigator>
                <Stack.Screen>
                  
                </Stack.Screen>
              </Stack.Navigator>
            )} */}
          </Tab.Screen>
          <Tab.Screen name="My Profile" component={EditProfile}  />
          <Tab.Screen name="Matches" component={Matches} />
        </Tab.Navigator>
        <Tab.Screen name = "Tab" component={ChatLog}/>
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
