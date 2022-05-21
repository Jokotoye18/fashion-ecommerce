import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import { Cart, Favourites, Home, Profile } from '@screens';
import { MainBottomTabParamList } from './types';
import { colors } from '@constants';

const MainBottomTab = createMaterialBottomTabNavigator<MainBottomTabParamList>();

export const MainBottomTabNavigator = () => {
  return (
    <MainBottomTab.Navigator
      screenOptions={{}}
      labeled={false}
      barStyle={{
        backgroundColor: colors.primaryColorLight,
      }}
      activeColor={colors.secondaryColor}
      inactiveColor={'#B6B6B6'}
    >
      <MainBottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name={focused ? 'grid' : 'grid-outline'} size={20} color={color} />
          ),
        }}
      />
      <MainBottomTab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name={focused ? 'cart' : 'cart-outline'} size={20} color={color} />
          ),
        }}
      />
      <MainBottomTab.Screen
        name="Favourites"
        component={Favourites}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name={focused ? 'ios-heart' : 'ios-heart-outline'} size={20} color={color} />
          ),
        }}
      />
      <MainBottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <FontAwesome name={focused ? 'user' : 'user-o'} size={20} color={color} />
          ),
        }}
      />
    </MainBottomTab.Navigator>
  );
};
