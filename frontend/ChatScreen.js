import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {View} from "react-native";
import Chat from "./Chat";
import ChatLog from "./ChatLog";
const ChatScreen = (props) => {
    const [user, setUser] = useState(null);
    
    const people = ["Person A","Person B","Person C"];
    const userToSubject = {"Person A":["Web Development","Pottery"],"Person B":["KDB","Blobfish"], "Person C":["Physics", "Ice Fishing"]}
    const messages = {"Person A":[{type:'received', data:'Hey! I saw that you wanted to learn pottery.'+
    'I am interested in learning web development. Would you like to teach each other?'}, 
    {type:'sent', data:'Hey! Yes, I\'ve been SUPER interested in getting into pottery!'}, {type:'sent', data:'I would love to pair up and teach each other!'},
     {type:'received', data:'Great! What does your availability for next week look like? I\'m free on Mondays after 5pm and Fridays after 3pm.'}],
                      "Person B":[{type:'received', data:'HEY! Are you ready to learn about the greatest fish of all time?'},
                       {type:'sent', data:'Are YOU ready to learn about the BEST database in history?'}, {type:'received', data:'YEAH!! What\'s the best you\'ve got?'}, 
                       {type:'sent', data:'kdb offers high-performance, in-database analytic capabilities :]'}],
                      "Person C":[{type:'received', data:'Hello! I am from rural Alaska, and I have had an interest in physics for a long time.'+
                       ' It is difficult to find people around here with this common interest, so I was hoping to find someone on this website.'},
                        {type:'sent', data:'I\'d be thrilled to be part of your journey in this field! Maybe I can teach you the next time you go ice fishing :)'}]}
    const Stack = createNativeStackNavigator();

    props.navigation.addListener('tabPress', () => {
        setUser(null);
      });
    useEffect(()=>{
        props.navigation.setOptions(user===null ? {headerTitle:"Chat"} : {headerTitle:user});
    });
    return ( 
        <View style={{height:"100%", width:"100%"}}>
            {user===null ? <Chat pressChat={setUser} people = {people}/> : <ChatLog messages={messages[user]} subjects={userToSubject[user]}/> }
        </View>
    )
}
 
export default ChatScreen;