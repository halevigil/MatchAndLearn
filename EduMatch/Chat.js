import React, { useState, useEffect } from 'react';
import { FlatList ,View} from 'react-native';
import { ListItem } from 'react-native-elements';

people = ["Person A","Person B","Person C"];


const Chat = (props) => {
    const renderMatch = ({item})=>
    <ListItem bottomDivider style={{width:"100%"}} onPress={()=>{
            props.pressChat(item);
        }}>
        <ListItem.Content style={{height:50}} >
            <ListItem.Title>{item}</ListItem.Title>
        </ListItem.Content>
    </ListItem>;
    return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width:"100%" }}>
        <FlatList style={{width:"100%"}} data={people} renderItem={renderMatch} keyExtractor={(item,i)=>i} />
  </View>
    )
}
 
export default Chat;