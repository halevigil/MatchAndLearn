import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';

import { TextInput} from 'react-native-paper';


import {View, Text } from 'react-native';


const EditProfile = (props) => {
    return (    
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'left' }}>
      <View style={{width:300}}>
        <TextInput label="Name"/>
        <TextInput label="Age" keyboardType='numeric'/>
      </View>
      </View>
    );
}
 
export default EditProfile;