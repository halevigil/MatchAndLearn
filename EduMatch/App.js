import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import EditProfile from './EditProfile';
import Matches from './Matches';
import Chat from './Chat';

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Chat" component={Chat} />
          <Tab.Screen name="Edit Profile" component={EditProfile} />
          <Tab.Screen name="Matches" component={Matches} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
