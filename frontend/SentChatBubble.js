import React, { useState, useEffect } from 'react';
import {View, Text} from 'react-native';
const SentChatBubble = (props) => {
    return ( <View style={{
        backgroundColor: "#0078fe",
        padding:10,
        marginLeft: '45%',
        borderRadius: 5,
        //marginBottom: 15,
        marginTop: 5,
        marginRight: "5%",
        maxWidth: '50%',
        alignSelf: 'flex-end',
        //maxWidth: 500,
        
        borderRadius: 20,
      }} key={0}>

        <Text style={{ fontSize: 16, color: "#fff", }} key={0}>Sent</Text>

          <View style={styles.rightArrow}></View>
          
          <View style={styles.rightArrowOverlap}></View>
        
        
        
</View>
);
}
 
export default SentChatBubble;