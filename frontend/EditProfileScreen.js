import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { TextInput, Button, Provider } from 'react-native-paper';
import { View, Text, Image } from 'react-native';
import DropDown from "react-native-paper-dropdown";
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import _ from "lodash";
import yaml from "js-yaml";
import fs from "fs";



const data = yaml.load(fs.readFileSync("categories.yaml"));

const processData = (data)=>{
  var out=[]
  var id_counter=1;
  if (!_.isArray(data)){
    data=_.map(data, (key,val)=>{return {name:key, id:id++, clickable:false}})
  }
  data=_.map(data, item=>{
    if (typeof item == 'string'){
      return {name: item, id:id++, clickable: true}
    }
    else return {
      name:item.keys[0],
      id:id++,
      children: processData(item.values)
    }
  })

}


const EditProfileScreen = (props) => {

  const [name, setName] = React.useState('');
  const [age, setAge] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [teaching, setTeaching] = React.useState('');
  const [learning, setLearning] = React.useState('');


  const categories = ["Algebra","Calculus","Geometry", "Computer Science", 
      "Physics", "Chemistry", "Biology", "Environmental Science",]

  const expertises = [
    { label: 'Gardening', value: 'gardening' },
    { label: 'Pottery', value: 'pottery' },
    { label: 'Web Development', value: 'web-development' },
    { label: 'Calculus', value: 'calculus' },
    { label: 'History', value: 'history' },
    { label: 'Cooking', value: 'cooking' },
    { label: 'Machine Learning', value: 'machine-learning' },
    { label: 'Stock', value: 'stock' }

  ];

  const curiosities = [
    { label: 'Gardening', value: 'gardening' },
    { label: 'Pottery', value: 'pottery' },
    { label: 'Web Development', value: 'web-development' },
    { label: 'Calculus', value: 'calculus' },
    { label: 'History', value: 'history' },
    { label: 'Cooking', value: 'cooking' },
    { label: 'Machine Learning', value: 'machine-learning' },
    { label: 'Stock', value: 'stock' }
  ];

  const onSaveButtonPress = () => {
    // save input to database
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Location: ${location}`);
    console.log(`Expertises: ${teaching}`);
    console.log(`Curiosities: ${learning}`);
  }
  
  const [showTeachingDropDown, setShowTeachingDropDown] = React.useState(false);
  const [showLearningDropDown, setShowLearningDropDown] = React.useState(false);
  
  return (
    <Provider>
      <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
        <Image
        source={require('./assets/blob.png')}
        style={{ width: 200, height: 200 }}
        />
        <View style={{ width: 300 }}>
          <TextInput
            label="Name"
            value={name}
            onChangeText={text => setName(text)}
          />
          <TextInput
            label="Age"
            keyboardType='numeric'
            value={age}
            onChangeText={text => setAge(text)}
          />
          <TextInput
            label="Location"
            value={location}
            onChangeText={text => setLocation(text)}
          />
          <SectionedMultiSelect
            selectText="What's your expertise?"
            items={items}
          />
          <TextInput
            label="What are you curious about?"
            value={learning}
            onChangeText={text => setLearning(text)}
          />
          <Button mode="contained" onPress={onSaveButtonPress}>
            Save
          </Button>
        </View>
      </View>
    </Provider>
  );
}

export default EditProfileScreen;
