import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {View} from "react-native";
import Chat from "./Chat";
import ChatLog from "./ChatLog";
const ChatScreen = (props) => {
    const [user, setUser] = useState(null);
    const userToSubject = {"Person A":["Chemistry","Physics"],"Person B":["A","B","C"], "Person C":["Hello"]}
    const Stack = createNativeStackNavigator();

    props.navigation.addListener('tabPress', () => {
        setUser(null);
      });
      
    pressChat = (e)=>{
        // console.log(props.navigation);
        setUser(e);
    }
    useEffect(()=>{
        props.navigation.setOptions(user===null ? {title:"Chat"} : {title:user});
    });
    return ( 
        <View style={{height:"100%", width:"100%"}}>
            {user===null ? <Chat pressChat={pressChat}/> : <ChatLog subjects={userToSubject[user]}/> }
        </View>
    )
}
 
export default ChatScreen;