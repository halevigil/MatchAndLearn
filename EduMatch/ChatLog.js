import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect, Profiler } from 'react';

import {View, Text, FlatList } from 'react-native';
import {ReceivedChatBubble, SentChatBubble} from './ChatBubbles';

messages=[{type: 'received', data:'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'},{type: 'received', data:'What\'s up'}, {type:'sent',data:'Hi! When wasfsdfsdfsfdsfasdfdsfsd fdssadffds'}]
const renderChatBubble = ({item})=>
    item.type==='sent' ? 
    <SentChatBubble>{item.data}</SentChatBubble> : 
    <ReceivedChatBubble>{item.data}</ReceivedChatBubble>

const ChatLog = (props) => {
    return (
    <View style={{ flex: 1, justifyContent: 'center',width:'100%' }}>
        <FlatList data={messages} renderItem={renderChatBubble} keyExtractor={(item,i)=>i} />

    </View>
  );
}
 





export default ChatLog;