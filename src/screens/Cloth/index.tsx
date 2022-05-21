import { globalStyles } from '@globalStyles';
import React from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';

import { useRoute } from '@react-navigation/native';
import Feather from '@expo/vector-icons/Feather';

import { ClothScreenRouteProp } from 'navigation/types';
import { SharedElement } from 'react-navigation-shared-element';
import { styles } from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import { ClothColors, Sizes, Button } from '@components';

export const Cloth = () => {
  const {
    params: { id, uri, category, title, price },
  } = useRoute<ClothScreenRouteProp>();

  return (
    <SafeAreaView style={[globalStyles.wrapper, styles.wrapper]}>
      <ScrollView contentContainerStyle={[globalStyles.container]}>
        <View style={styles.titles}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.category}>{category}</Text>
        </View>
        <View style={globalStyles.rowBetween}>
          <View style={styles.imgContainer}>
            <SharedElement id={`cloth.${id}.photo`} style={styles.imgBox}>
              <Image source={{ uri }} style={styles.img} resizeMode={'cover'} />
            </SharedElement>
          </View>
          <View style={styles.sizeContainer}>
            <Sizes />
          </View>
        </View>
        <View style={styles.colors}>
          <ClothColors />
        </View>
        <View style={[styles.footer, globalStyles.rowBetween]}>
          <View>
            <Text style={[styles.footerPriceTitle]}>Price</Text>
            <Text style={[styles.footerPriceValue]}>${price}</Text>
          </View>

          <Button
            title="Add to Cart"
            icon={<Feather name="shopping-cart" color="#fff" size={15} />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
