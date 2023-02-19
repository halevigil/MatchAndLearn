import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import EditProfile from './EditProfile';
import Matches from './Matches';
import ChatLog from './ChatLog';

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Chat" component={ChatLog} />
          <Tab.Screen name="My Profile" component={EditProfile} />
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
