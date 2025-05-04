import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AccountScreen, HomeScreen, MyTripScreen} from '../../routes';
import {FlykroCustomTabs} from './Components';

const Tab = createBottomTabNavigator();

const FlykroTabs = () => {
  return (
    <Tab.Navigator tabBar={props => <FlykroCustomTabs {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="MyTrip" component={MyTripScreen} />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={() => ({
          headerShown: false,
        })}
      />
    </Tab.Navigator>
  );
};

export default FlykroTabs;
