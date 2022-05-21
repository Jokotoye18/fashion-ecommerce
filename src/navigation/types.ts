import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

export interface ICloth {
  id: string;
  uri: string;
  title: string;
  price: string;
  category: string;
}

export type RootStackParamList = {
  OnBoarding: undefined;
  HomeTab: undefined;
  Cloth: ICloth;
};

export type MainBottomTabParamList = {
  Home: undefined;
  Cart: undefined;
  Favourites: undefined;
  Profile: undefined;
};

export type OnBoardingScreenNavigationProp = StackNavigationProp<RootStackParamList, 'OnBoarding'>;
export type HomeTabScreenNavigationProp = StackNavigationProp<RootStackParamList, 'HomeTab'>;
export type ClothScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Cloth'>;
export type ClothScreenRouteProp = RouteProp<RootStackParamList, 'Cloth'>;
