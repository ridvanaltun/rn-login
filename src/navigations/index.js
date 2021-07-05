import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Screens from '../screens';
import {Theme} from '../constants';
import {HeaderBackButton} from '../components';

const Stack = createStackNavigator();

const initialRouteName = 'Introduction';

export default function () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRouteName}>
        <Stack.Screen
          name="Introduction"
          component={Screens.IntroductionScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Screens.LoginScreen}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: Theme.COLORS.LIGHT_GRAY,
              elevation: 0, // remove shadow on Android
              shadowOpacity: 0, // remove shadow on iOS
            },
            headerLeft: props => <HeaderBackButton {...props} />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
