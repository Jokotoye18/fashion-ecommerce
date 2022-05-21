import React from 'react';
import { TouchableOpacity } from 'react-native';

import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import { Cloth, OnBoarding } from '@screens';
import { RootStackParamList } from './types';
import { MainBottomTabNavigator } from './MainBottomTabNavigator';
import { globalStyles } from '@globalStyles';
import { layout } from '@utils';

const RootStack = createSharedElementStackNavigator<RootStackParamList>();

export const RootStackNavigator = () => {
  const navigation = useNavigation();
  return (
    <RootStack.Navigator
      // initialRouteName="HomeTab"
      screenOptions={{
        headerShown: false,
      }}
    >
      <RootStack.Screen name="OnBoarding" component={OnBoarding} />
      <RootStack.Screen
        name="HomeTab"
        component={MainBottomTabNavigator}
        sharedElements={(route, otherRoute, showing) => {
          const { id } = route.params;
          return [
            {
              id: `cloth.${id}.photo`,
              animation: 'move',
              resize: 'none',
              align: 'right-center',
            },
          ];
        }}
      />
      <RootStack.Screen
        name="Cloth"
        component={Cloth}
        options={{
          headerShadowVisible: false,
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: '#F8F8F8',
          },
          cardStyleInterpolator: ({ current: { progress } }) => {
            const opacity = progress.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1],
              extrapolate: 'clamp',
            });
            return {
              cardStyle: {
                opacity: opacity,
              },
            };
          },
          gestureEnabled: false,
          animationEnabled: false,
          cardStyle: {
            backgroundColor: 'transparent',
          },
          headerShown: true,
          title: '',
          headerLeft: () => (
            <TouchableOpacity
              activeOpacity={0.7}
              style={[
                globalStyles.item,
                globalStyles.rowCenter,
                { marginLeft: layout.pixelSizeHorizontal(15) },
              ]}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="arrow-back" size={20} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              activeOpacity={0.7}
              style={[
                globalStyles.item,
                globalStyles.rowCenter,
                { marginRight: layout.pixelSizeHorizontal(15) },
              ]}
            >
              <Ionicons name="cart-outline" size={20} />
            </TouchableOpacity>
          ),
        }}
      />
    </RootStack.Navigator>
  );
};
