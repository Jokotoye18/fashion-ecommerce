import { colors } from '@constants';
import { globalStyles } from '@globalStyles';
import { layout } from '@utils';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type FeatureHeaderProps = {
  title: string;
};

export const FeatureHeader = ({ title }: FeatureHeaderProps) => {
  return (
    <View style={[globalStyles.rowBetween, styles.container]}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity activeOpacity={0.7}>
        <Text style={styles.seeAll}>see all</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: layout.pixelSizeVertical(20),
  },
  title: {
    color: '#000',
    fontFamily: 'Nunito_600SemiBold',
    fontSize: layout.fontPixel(25),
  },
  seeAll: {
    color: colors.lightColor,
    fontFamily: 'Nunito_600SemiBold',
  },
});
