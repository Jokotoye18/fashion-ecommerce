import { colors } from '@constants';
import { layout } from '@utils';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const sizesData = [
  {
    id: '1',
    size: 'S',
    active: true,
  },
  {
    id: '2',
    size: 'M',
    active: false,
  },
  {
    id: '3',
    size: 'L',
    active: false,
  },
  {
    id: '4',
    size: 'XL',
    active: false,
  },
];

export const Sizes = () => {
  const [sizes, setSizes] = useState(sizesData);

  const handleSetSizes = (id: string) => {
    setSizes((prevState) => {
      return prevState.map((size) => {
        return {
          ...size,
          active: size.id === id ? true : false,
        };
      });
    });
  };
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {sizes.map((size) => {
        const { active, id } = size;
        return (
          <View key={id} style={styles.sizeBox}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={[
                styles.sizeRound,
                { backgroundColor: active ? colors.secondaryColor : 'transparent' },
              ]}
              onPress={() => handleSetSizes(id)}
            >
              <Text style={[styles.size, { color: active ? '#ffff' : '#B9B9B9' }]}>
                {size.size}
              </Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  sizeBox: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginBottom: layout.pixelSizeVertical(10),
  },
  sizeRound: {
    width: layout.heightPixel(60),
    height: layout.heightPixel(60),
    borderRadius: layout.heightPixel(60) / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  size: {
    fontSize: layout.fontPixel(25),
  },
});
