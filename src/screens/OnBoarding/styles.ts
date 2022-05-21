import { colors } from '@constants';
import { layout } from '@utils';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  arriver: {
    padding: layout.pixelSizeVertical(25),
    borderRadius: layout.fontPixel(8),
    overflow: 'hidden',
    marginTop: layout.pixelSizeVertical(30),
  },
  arrivalText: {
    fontSize: layout.fontPixel(20),
    fontWeight: '600',
    color: colors.primaryColorLight,
    fontFamily: 'Nunito_600SemiBold',
  },
  featureText: {
    fontSize: layout.fontPixel(55),
    color: colors.primaryColorLight,
    fontWeight: '700',
    fontFamily: 'Nunito_700Bold',
  },
  old: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    textDecorationColor: colors.secondaryColor,
  },
  skip: {
    fontSize: layout.fontPixel(20),
    color: colors.primaryColorLight,
    fontWeight: '700',
    fontFamily: 'Nunito_600SemiBold',
  },
  footer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  footerBtnBox: {
    flex: 1,
    // backgroundColor: 'yellow',
  },
});
