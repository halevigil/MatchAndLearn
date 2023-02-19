import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { TextInput, Menu, Button, Provider } from 'react-native-paper';
import { View, Text } from 'react-native';

const EditProfile = (props) => {

  const [menuVisible, setMenuVisible] = React.useState(false);

  const openMenu = () => setMenuVisible(true);

  const closeMenu = () => setMenuVisible(false);

  return (
    <Provider>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ width: 300 }}>
          <TextInput label="Name" />
          <TextInput label="Age" keyboardType='numeric' />
          <TextInput label="Location" />

          <Menu
            visible={menuVisible}
            onDismiss={closeMenu}
            anchor={
              <TextInput
                label="Expertise"
                onFocus={openMenu}
                onBlur={closeMenu}
              />
            }
          >
            <Menu.Item title="Gardening" onPress={closeMenu} />
            <Menu.Item title="Web Development" onPress={closeMenu} />
            <Menu.Item title="Calculus" onPress={closeMenu} />
          </Menu>

          <Menu
            visible={menuVisible}
            onDismiss={closeMenu}>
           

            <Menu.Item title="Gardening" onPress={closeMenu} />
            <Menu.Item title="Web Development" onPress={closeMenu} />
            <Menu.Item title="Calculus" onPress={closeMenu} />
          </Menu>

          <Button  mode="contained" onPress={() => console.log('Pressed')}>
          Save
        </Button>
        </View>
      </View>
    </Provider>
  );
}

export default EditProfile;