import { colors } from '@constants';
import { layout } from '@utils';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#F8F8F8',
  },
  titles: {
    marginVertical: layout.pixelSizeVertical(20),
  },
  title: {
    color: '#000',
    fontFamily: 'Nunito_700Bold',
    fontSize: layout.fontPixel(25),
    textAlign: 'center',
    fontWeight: '900',
  },
  category: {
    color: colors.lightColor,
    fontFamily: 'Nunito_600SemiBold',
    fontSize: layout.fontPixel(20),
    textAlign: 'center',
    fontWeight: '600',
  },
  imgContainer: {
    flexBasis: '75%',
  },
  sizeContainer: {
    flexBasis: '20%',
    backgroundColor: '#fff',
    borderRadius: layout.fontPixel(80),
  },
  imgBox: {
    height: layout.heightPixel(400),
    width: '100%',
  },
  img: {
    flex: 1,
    borderRadius: layout.fontPixel(10),
  },
  colors: {
    marginTop: layout.pixelSizeVertical(50),
  },
  footer: {
    flex: 1,
  },
  footerPriceTitle: {
    fontSize: layout.fontPixel(20),
    color: colors.lightColor,
    fontFamily: 'Nunito_700Bold',
  },
  footerPriceValue: {
    fontSize: layout.fontPixel(25),
    color: '#000',
    fontFamily: 'Nunito_700Bold',
  },
});
