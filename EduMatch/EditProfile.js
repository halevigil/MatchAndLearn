import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { TextInput, Menu, Button, Provider, TouchableWithoutFeedback } from 'react-native-paper';
import { View, Text } from 'react-native';

const EditProfile = (props) => {

  const [teachMenuVisible, setTeachMenuVisible] = React.useState(false);
  const [learnMenuVisible, setLearnMenuVisible] = React.useState(false);

  const openTeachMenu = () => setTeachMenuVisible(true);
  const closeTeachMenu = () => setTeachMenuVisible(false);

  const openLearnMenu = () => setLearnMenuVisible(true);
  const closeLearnMenu = () => setLearnMenuVisible(false);
  return (
    <Provider>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ width: 300 }}>
          <TextInput label="Name"/>
          <TextInput label="Age" keyboardType='numeric' />
          <TextInput label="Location" />

          <Menu
            visible={openTeachMenu}
            onDismiss={closeTeachMenu}
            anchor={<TextInput
              label="What's your expertises?"
              onFocus={openTeachMenu}
              onBlur={closeTeachMenu}
            />
            }
          >
            <Menu.Item title="Gardening" onPress={closeTeachMenu} />
            <Menu.Item title="Web Development" onPress={closeTeachMenu} />
            <Menu.Item title="Calculus" onPress={closeTeachMenu} />
          </Menu>



          <Menu
            visible={openLearnMenu}
            onDismiss={closeLearnMenu}
            anchor={<TextInput
  
              label="What are you curious about?"
              onFocus={openLearnMenu}
              onBlur={closeLearnMenu}
            />
            }
          >
            <Menu.Item title="Gardening" onPress={closeLearnMenu} />
            <Menu.Item title="Web Development" onPress={closeLearnMenu} />
            <Menu.Item title="Calculus" onPress={closeLearnMenu} />
          </Menu>


          <Button mode="contained" onPress={() => console.log('Pressed')}>
            Save
          </Button>
        </View>
      </View>
    </Provider>
  );
}

export default EditProfile;