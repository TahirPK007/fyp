import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

import Login from './screens/Login';
import Signup from './screens/Signup';
import Addpatient from './screens/Addpatient';
import Addvitals from './screens/Addvitals';
import Jrdoc from './screens/Jrdoc';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Addpatient" component={Addpatient} />
        <Stack.Screen name="Addvitals" component={Addvitals} />
        <Stack.Screen name="Jrdoc" component={Jrdoc} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
