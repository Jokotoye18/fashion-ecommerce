import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import { FeatureHeader } from '@components';
import { layout } from '@utils';
import { globalStyles } from '@globalStyles';
import { BlurView } from 'expo-blur';

const SEASON_BOX_HEIGHT = layout.heightPixel(200);
const SEASON_BOX_FOOTER = layout.heightPixel(50);
const SEASON_BOX_MARGIN_RIGHT = layout.pixelSizeHorizontal(20);

export const Collections = () => {
  const { width } = useWindowDimensions();
  const calcWidth = width - globalStyles.container.paddingHorizontal * 2;
  const data = [
    {
      id: '1',
      season: 'Spring',
      uri: 'https://images.unsplash.com/photo-1593955808003-93f6151e6028?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3ByaW5nJTIwc2Vhc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800',
    },
    {
      id: '2',
      season: 'Winter',
      uri: 'https://images.unsplash.com/photo-1547580134-a523397c723c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2ludGVyJTIwc2Vhc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800',
    },
    {
      id: '3',
      season: 'Summer',
      uri: 'https://images.unsplash.com/photo-1554871037-99938249e220?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3VtbWVyJTIwc2Vhc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800',
    },
  ];
  return (
    <View>
      <FeatureHeader title="Collection" />
      <View style={[styles.scrollBox]}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ maxHeight: SEASON_BOX_HEIGHT }}
        >
          {data.map((season, index) => {
            return (
              <TouchableOpacity
                activeOpacity={0.7}
                key={season.id}
                style={[
                  styles.season,
                  {
                    marginRight: data.length === index + 1 ? 0 : SEASON_BOX_MARGIN_RIGHT,
                    width: calcWidth * 0.38,
                  },
                ]}
              >
                <Image
                  source={{ uri: season.uri }}
                  style={[StyleSheet.absoluteFill, styles.img]}
                  resizeMode="cover"
                />
                <BlurView tint="dark" intensity={20} style={styles.footer}>
                  <Text style={[styles.seasonTitle]}>{season.season}</Text>
                </BlurView>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollBox: {
    height: SEASON_BOX_HEIGHT,
  },

  season: {
    height: SEASON_BOX_HEIGHT,
    borderRadius: layout.fontPixel(10),
  },
  img: {
    borderRadius: layout.fontPixel(10),
  },
  seasonTitle: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Nunito_500Medium',
    fontSize: layout.fontPixel(18),
  },
  footer: {
    position: 'absolute',
    overflow: 'hidden',
    left: 0,
    right: 0,
    bottom: 0,
    height: SEASON_BOX_FOOTER,
    justifyContent: 'center',
    borderBottomLeftRadius: layout.fontPixel(10),
    borderBottomRightRadius: layout.fontPixel(10),
  },
});
