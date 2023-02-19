import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
const Chat = (props) => {
    return 
    // <FlatList>
        <ListItem>
            <ListItem.Title>
                You matched with {} over {} and {}
            </ListItem.Title>
        </ListItem>;
    // </FlatList> );
}
 
export default Chat;