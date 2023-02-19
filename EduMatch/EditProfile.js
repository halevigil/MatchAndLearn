import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { TextInput, Menu, Button, Provider, TouchableWithoutFeedback } from 'react-native-paper';
import { View, Text, Image, Picker } from 'react-native';

const EditProfile = (props) => {

  const [name, setName] = React.useState('');
  const [age, setAge] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [teaching, setTeaching] = React.useState('');
  const [learning, setLearning] = React.useState('');

  const [teachingMenuVisible, setTeachingMenuVisible] = React.useState(false);
  const [learningMenuVisible, setLearningMenuVisible] = React.useState(false);

  const openTeachingMenu = () => setTeachingMenuVisible(true);
  const closeTeachingMenu = () => setTeachingMenuVisible(false);
  const openLearningMenu = () => setLearningMenuVisible(true);
  const closeLearningMenu = () => setLearningMenuVisible(false);

  const onSaveButtonPress = () => {
    // save input to database
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Location: ${location}`);
    console.log(`Expertises: ${teaching}`);
    console.log(`Curiosities: ${learning}`);
  }

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

          <Menu
            visible={teachingMenuVisible}
            onDismiss={closeTeachingMenu}
            anchor={<TextInput
              label="What's your expertises?"
              value={teaching}
              onFocus={openTeachingMenu}
              onBlur={closeTeachingMenu}
            />
            }
          >
            <Menu.Item title="Gardening" onPress={() => { setTeaching("Gardening"); closeTeachingMenu() }} />
            <Menu.Item title="Web Development" onPress={() => { setTeaching("Web Development"); closeTeachingMenu() }} />
            <Menu.Item title="Calculus" onPress={() => { setTeaching("Calculus"); closeTeachingMenu() }} />
          </Menu>

          <Menu
            visible={learningMenuVisible}
            onDismiss={closeLearningMenu}
            anchor={<TextInput
              label="What are you curious about?"
              value={learning}
              onFocus={openLearningMenu}
              onBlur={closeLearningMenu}
            />
            }
          >
            <Menu.Item title="Gardening" onPress={() => { setLearning("Gardening"); closeLearningMenu() }} />
            <Menu.Item title="Web Development" onPress={() => { setLearning("Web Development"); closeLearningMenu() }} />
            <Menu.Item title="Calculus" onPress={() => { setLearning("Calculus"); closeLearningMenu() }} />
          </Menu>

          <Button mode="contained" onPress={onSaveButtonPress}>
            Save
          </Button>
        </View>
      </View>
    </Provider>
  );
}

export default EditProfile;