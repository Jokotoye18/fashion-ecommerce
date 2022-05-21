import { globalStyles } from '@globalStyles';
import { layout } from '@utils';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const colorsData = [
  {
    id: '1',
    color: '#FCCFA5',
    active: true,
  },
  {
    id: '2',
    color: '#D2D4DD',
    active: false,
  },
  {
    id: '3',
    color: '#E0D6CA',
    active: false,
  },
  {
    id: '4',
    color: '#F8A3A3',
    active: false,
  },
];

export const ClothColors = () => {
  const [colors, setColors] = useState(colorsData);

  const handleSetColors = (id: string) => {
    setColors((prevState) => {
      return prevState.map((color) => {
        return {
          ...color,
          active: color.id === id ? true : false,
        };
      });
    });
  };

  return (
    <View style={[styles.container, globalStyles.rowCenter]}>
      {colors.map((color, index) => {
        return (
          <TouchableOpacity
            activeOpacity={0.7}
            key={color.id}
            style={[
              styles.colorLayerOne,
              globalStyles.rowCenter,
              { marginRight: colorsData.length === index + 1 ? 0 : layout.pixelSizeHorizontal(35) },
            ]}
            onPress={() => handleSetColors(color.id)}
          >
            <View
              style={[
                styles.colorLayerTwo,
                globalStyles.rowCenter,
                { backgroundColor: color.color },
              ]}
            >
              {!color.active ? <View style={styles.colorLayerThree} /> : null}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  colorLayerOne: {
    width: layout.heightPixel(60),
    height: layout.heightPixel(60),
    backgroundColor: '#fff',
    borderRadius: layout.fontPixel(8),
  },
  colorLayerTwo: {
    width: layout.heightPixel(45),
    height: layout.heightPixel(45),
    borderRadius: layout.heightPixel(45) / 2,
  },
  colorLayerThree: {
    width: layout.heightPixel(30),
    height: layout.heightPixel(30),
    borderRadius: layout.heightPixel(60) / 2,
    backgroundColor: '#fff',
  },
});
