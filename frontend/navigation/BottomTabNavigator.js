import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import Home from '../screens/HomeScreen';
import Camera from '../screens/CameraScreen';
import Claim from '../screens/ClaimScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Check In';

export default function BottomTabNavigator({ navigation, route }) {

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-home" />,
        }}
      />
      <BottomTab.Screen
        name="Camera"
        component={Camera}
        options={{
          title: 'Camera',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-camera" />,
        }}
      />
      <BottomTab.Screen
        name="Claim"
        component={Claim}
        options={{
          title: 'Claim',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-trophy" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

