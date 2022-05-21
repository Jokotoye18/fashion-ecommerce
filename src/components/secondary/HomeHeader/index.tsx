import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';

import { globalStyles } from '@globalStyles';
import { colors } from '@constants';
import { layout } from '@utils';

export const HomeHeader = () => {
  return (
    <View style={[globalStyles.rowBetween, styles.container]}>
      <TouchableOpacity activeOpacity={0.7} style={[globalStyles.item, globalStyles.rowCenter]}>
        <FontAwesome name="align-left" size={15} />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.7} style={[globalStyles.item, globalStyles.rowCenter]}>
        <Feather name="search" size={15} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: layout.pixelSizeVertical(15),
  },
});
