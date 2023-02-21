import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';

import { View, Text, StyleSheet, SafeAreaView, FlatList, Button, Alert } from 'react-native';
import { Card, ListItem, Icon } from 'react-native-elements';
import _ from "lodash";


const onSaveButtonPress = () => {

}
const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
// const Item = ({ skills }) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{title}</Text>
//   </View>
// );
const Matches = () => {

    const [DATA, setDATA] = useState([
        {
          id: '1',
          title: 'Ashley Huang', /*change to name? */
          expertise: 'Coffee Brewing, Horses, Gardening',
          interests: 'Coding, Cars, 3D Printing',
        },
        {
          id: '2',
          title: 'Flora Cai',
          expertise: 'Gardening, Calculus, Pottery',
          interests: 'Software development, Calculus, Hedgefunding',
        },
        {
          id: '3',
          title: 'Krysten Nguyen',
          expertise: 'Flowers, Visual Aesthetics, Florida ',
          interests: 'Florida Man, Stocks, Coding'
        },
        {
          id: '4',
          title: 'Gil Halevi',
          expertise: 'Hiking, Irrigation, Environmental Awareness',
          interests: 'Javascript, kdb, Marshall Wace',
        }
      ]);
    const removeItem=(item)=>{
      console.log(item);
        setDATA(_.filter(DATA,(x)=>x.id!==item.id));
    }
      
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>

        <FlatList
          data={DATA}
          renderItem={({ item }) =>
            <Card>
              {/* <View style = {styles.container}> */}
              <Text style={{ flex: 1, fontSize: 15 }}>Name: {item.title}{'\n'}</Text>
              <Text style={{ flex: 1, fontSize: 15 }}>Expertise: {item.expertise}</Text>
              <Text style={{ flex: 1, fontSize: 15 }}>Curiosities: {item.interests}</Text>

              <View style={{ flexDirection: "row", paddingTop:10 }}>
                <View style={{paddingLeft: 5, paddingRight: 10}}>
                  <View style={{ backgroundColor: "#6750a4", width:140}}>
                    <Button
                      color="#ffffff"
                      title="Match"
                      onPress={()=>removeItem(item)}/>
                  </View>
                </View>
                <View style={{paddingLeft:10}}>
                  <View style={{ backgroundColor: "#6750a4", width:140}}>
                    <Button
                      color="#ffffff"
                      title="Reject"
                      onPress={()=>removeItem(item)}/>
                  </View>
                </View>
              </View>


              {/* </View> */}

            </Card>
          }
          keyExtractor={item => item.id} />

        {/* <Card>
          <Text style={styles.paragraph}>
            React Native Card View for Android and IOS using
            "react-native-paper"
          </Text>
        </Card>

        <Card>
          
        </Card> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20
  },
});
export default Matches;

