import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';

import { globalStyles } from '@globalStyles';
import { styles } from './styles';
import { useHomeHelper } from './useHomeHelper';
import { Collections, HomeHeader, NewArrivals } from '@components';
import { layout } from '@utils';

export const Home = () => {
  return (
    <SafeAreaView style={[globalStyles.wrapper, styles.wrrapper]}>
      <ScrollView
        contentContainerStyle={[
          globalStyles.container,
          { paddingBottom: layout.pixelSizeVertical(40) },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <HomeHeader />
        <NewArrivals />
        <Collections />
      </ScrollView>
    </SafeAreaView>
  );
};
