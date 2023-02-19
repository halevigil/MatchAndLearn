import React, { useState, useEffect } from 'react';
import {View, Text} from 'react-native';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  rightArrow: {
    position: "absolute",
    backgroundColor: "#DEACF5",
    //backgroundColor:"red",
    width: 20,
    height: 25,
    bottom: 0,
    borderBottomLeftRadius: 25,
    right: -10
  },
  
  rightArrowOverlap: {
    position: "absolute",
    backgroundColor: "#eeeeee",
    //backgroundColor:"green",
    width: 20,
    height: 35,
    bottom: -6,
    borderBottomLeftRadius: 18,
    right: -20
  
  },
  
  /*Arrow head for recevied messages*/
  leftArrow: {
      position: "absolute",
      backgroundColor: "#dedede",
      //backgroundColor:"red",
      width: 20,
      height: 25,
      bottom: 0,
      borderBottomRightRadius: 25,
      left: -10
  },
  
  leftArrowOverlap: {
      position: "absolute",
      backgroundColor: "#eeeeee",
      //backgroundColor:"green",
      width: 20,
      height: 35,
      bottom: -6,
      borderBottomRightRadius: 18,
      left: -20
  
  },
  })
export const ReceivedChatBubble = (props) => {
    return (  
        <View style={{
            backgroundColor: "#dedede",
            padding:10,
            borderRadius: 5,
            marginTop: 5,
            marginLeft: "4%",
            maxWidth: '70%',
            alignSelf: 'flex-start',
            //maxWidth: 500,
            //padding: 14,
            
            //alignItems:"center",
            borderRadius: 20,
          }} key={0}>

            
              
              <Text style={{ fontSize: 16, color: "#000",justifyContent:"center" }} key={0}> {props.children}</Text>
              <View style={styles.leftArrow}>

              </View>
              <View style={styles.leftArrowOverlap}></View>
            
            
            
            </View>
);
}
export const SentChatBubble = (props) => {
    return ( <View style={{
        backgroundColor: "#DEACF5",
        padding:10,
        marginRight: '5%',
        borderRadius: 5,
        //marginBottom: 15,
        marginTop: 5,
        marginRight: "4%",
        maxWidth: '70%',
        alignSelf: 'flex-end',
        //maxWidth: 500,
        borderRadius: 20,
      }} key={0}>

        <Text style={{ fontSize: 16, color: "#000", }} key={0}>{props.children}</Text>

          <View style={styles.rightArrow}></View>
          
          <View style={styles.rightArrowOverlap}></View>
        
        
        
</View>
);
}
