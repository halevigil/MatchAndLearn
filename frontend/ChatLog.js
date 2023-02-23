import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect, Profiler } from 'react';
import _ from "lodash"

import {View, FlatList } from 'react-native';
import {Text} from 'react-native-elements';
import {ReceivedChatBubble, SentChatBubble} from './ChatBubbles';

const renderChatBubble = ({item})=>
    item.sent ? 
    <SentChatBubble>{item.data}</SentChatBubble> : 
    <ReceivedChatBubble>{item.data}</ReceivedChatBubble>

const format = (subjects)=>{
    if (subjects.length===1){
        return <Text style={{fontWeight: "bold"}}>{subjects[0]}</Text>;
    } else if (subjects.length == 2){
        return <Text> <Text style={{fontWeight: "bold"}}>{subjects[0]}</Text> and {format(_.slice(subjects,1))}</Text>
    } else{
        return <Text> <Text style={{fontWeight: "bold"}}>{subjects[0]}</Text>, {format(_.slice(subjects,1))}</Text>
    }
}

const ChatLog = (props) => {
    return (
    <View style={{ flex: 1, justifyContent: 'center',width:'100%' }}>
        <Text style={{
        padding:10,
        marginRight: '5%',
        borderRadius: 5,
        //marginBottom: 15,
        marginTop: 5,
        marginRight: "4%",
        maxWidth: '100%',
        alignSelf: 'center',
        //maxWidth: 500,
        borderRadius: 20,
      }}>
        You matched over
            {format(props.subjects)}
        </Text>
        <FlatList data={props.messages} renderItem={renderChatBubble} keyExtractor={(item,i)=>i} />

    </View>
  );
}
 





export default ChatLog;