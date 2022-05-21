import React, { memo } from 'react';
import { StyleSheet, TouchableOpacity, View, StyleProp, ViewStyle, Text } from 'react-native';

import FontAwesome from '@expo/vector-icons/FontAwesome';

import { colors } from '@constants';
import { layout } from '@utils';
import { globalStyles } from '@globalStyles';

type ButtonProps = TouchableOpacity['props'] & {
  title: string;
  icon?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
};

export const Button = memo(({ title, icon, style, containerStyle, ...rest }: ButtonProps) => {
  return (
    <View style={containerStyle}>
      <TouchableOpacity activeOpacity={0.8} style={[styles.btn, globalStyles.rowCenter]} {...rest}>
        {icon ? <View style={styles.iconBox}>{icon}</View> : null}
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
});

const styles = StyleSheet.create({
  btn: {
    borderRadius: layout.heightPixel(8),
    height: layout.heightPixel(60),
    backgroundColor: colors.secondaryColor,
    paddingVertical: layout.pixelSizeVertical(12),
    paddingHorizontal: layout.pixelSizeHorizontal(12),
  },
  iconBox: {
    width: layout.widthPixel(35),
    height: layout.widthPixel(35),
    borderRadius: layout.widthPixel(35) / 2,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: layout.pixelSizeHorizontal(10),
  },
  title: {
    color: '#fff',
    fontFamily: 'Nunito_700Bold',
  },
});
