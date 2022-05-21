import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SharedElement } from 'react-navigation-shared-element';

import { colors } from '@constants';
import { globalStyles } from '@globalStyles';
import { layout } from '@utils';
import { FeatureHeader } from '@components';
import { HomeTabScreenNavigationProp, ICloth } from 'navigation/types';

const CLOTH_BOX_HEIGHT = layout.heightPixel(380);
const CLOTH_BOX_FOOTER = layout.heightPixel(80);
const CLOTH_BOX_MARGIN_RIGHT = layout.pixelSizeHorizontal(20);

export const NewArrivals = () => {
  const { width } = useWindowDimensions();
  const calcWidth = width - globalStyles.container.paddingHorizontal * 2;
  const navigation = useNavigation<HomeTabScreenNavigationProp>();

  const handlePress = (cloth: ICloth) => {
    navigation.navigate('Cloth', {
      ...cloth,
    });
  };

  const data = [
    {
      id: '1',
      uri: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2hpcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=800',
      title: 'Long Sleeve T Shirt',
      price: '100',
      category: 'Shirt',
    },
    {
      id: '2',
      uri: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927',
      title: 'Sleeve T Shirt',
      price: '250',
      category: 'Short Shirt',
    },
    {
      id: '3',
      uri: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2hpcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=800',
      title: 'Short Sleeve T Shirt',
      price: '180',
      category: 'Sweater',
    },
    {
      id: '4',
      uri: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1015',
      title: 'Plain Short Sleeve T Shirt',
      price: '470',
      category: 'Short Shirt',
    },
  ];

  return (
    <View style={styles.container}>
      <FeatureHeader title="New Arrival" />
      <View style={styles.scrollBox}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ maxHeight: CLOTH_BOX_HEIGHT }}
        >
          {data.map((cloth, index) => {
            return (
              <TouchableOpacity
                activeOpacity={0.7}
                key={cloth.id}
                style={[
                  styles.clothBox,
                  {
                    width: calcWidth * 0.67,
                    marginRight: data.length === index + 1 ? 0 : CLOTH_BOX_MARGIN_RIGHT,
                  },
                ]}
                onPress={() => handlePress(cloth)}
              >
                <SharedElement id={`cloth.${cloth.id}.photo`} style={styles.imgBox}>
                  <Image source={{ uri: cloth.uri }} resizeMode="cover" style={styles.img} />
                </SharedElement>
                <View style={[styles.footer]}>
                  <View style={{ marginRight: layout.pixelSizeHorizontal(10) }}>
                    <Text style={styles.footerTitle}>{cloth.title}</Text>
                    <Text style={styles.footerPrice}>${cloth.price}</Text>
                  </View>
                  <TouchableOpacity activeOpacity={0.7}>
                    <MaterialCommunityIcons name="heart-circle" size={30} color="#FA5F44" />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: layout.pixelSizeVertical(15),
  },
  scrollBox: {
    height: CLOTH_BOX_HEIGHT,
  },
  scroll: {
    maxHeight: CLOTH_BOX_HEIGHT,
  },
  clothBox: {
    height: CLOTH_BOX_HEIGHT - layout.heightPixel(10),
    backgroundColor: colors.primaryColorLight,
    borderRadius: layout.fontPixel(10),
    shadowColor: 'rgba(0,0,0,0.3)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imgBox: {
    height: CLOTH_BOX_HEIGHT - CLOTH_BOX_FOOTER,
    padding: layout.fontPixel(10),
  },
  img: {
    flex: 1,
    borderRadius: layout.fontPixel(10),
  },
  footer: {
    height: CLOTH_BOX_FOOTER,
    paddingHorizontal: layout.fontPixel(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: layout.pixelSizeVertical(10),
  },
  footerTitle: {
    fontSize: layout.fontPixel(18),
    fontFamily: 'Nunito_600SemiBold',
    color: '#000',
  },
  footerPrice: {
    color: colors.lightColor,
    fontSize: layout.fontPixel(14),
    paddingTop: layout.pixelSizeVertical(5),
    fontFamily: 'Nunito_700Bold',
  },
});
