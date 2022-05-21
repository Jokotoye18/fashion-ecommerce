import { useNavigation } from '@react-navigation/native';
import { OnBoardingScreenNavigationProp } from 'navigation/types';

export const useOnBoardingHelper = () => {
  const navigation = useNavigation<OnBoardingScreenNavigationProp>();

  const navigateHome = () => {
    navigation.navigate('HomeTab');
  };

  return {
    navigateHome,
  };
};
