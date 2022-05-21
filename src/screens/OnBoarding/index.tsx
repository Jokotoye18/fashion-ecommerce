import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  useWindowDimensions,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import { BlurView } from 'expo-blur';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { images } from '@constants';
import { globalStyles } from '@globalStyles';
import { styles } from './styles';
import { useOnBoardingHelper } from './useOnBoardingHelper';
import { Button } from '@components';

export const OnBoarding = () => {
  const { width } = useWindowDimensions();
  const { navigateHome } = useOnBoardingHelper();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Image
        source={images.onboarding}
        style={[StyleSheet.absoluteFill, { width }]}
        resizeMode="cover"
      />
      <View style={[globalStyles.container]}>
        <View style={{ flex: 1.5 }}>
          <View style={[globalStyles.rowStart]}>
            <BlurView intensity={10} tint="dark" style={styles.arriver}>
              <Text style={styles.arrivalText}>26 new arrivals 🔥</Text>
            </BlurView>
          </View>
        </View>
        <View style={styles.footer}>
          <View>
            <Text style={styles.featureText}>
              <Text>With </Text>
              <Text style={styles.old}>old</Text>
              <Text> new clothes</Text>
            </Text>
          </View>
          <View style={[globalStyles.rowBetween, styles.footerBtnBox]}>
            <TouchableOpacity activeOpacity={0.7} onPress={navigateHome}>
              <Text style={styles.skip}>Skip</Text>
            </TouchableOpacity>
            <Button
              title="Get Started"
              icon={<MaterialCommunityIcons name="arrow-right-thin" color="#fff" size={25} />}
              onPress={navigateHome}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
