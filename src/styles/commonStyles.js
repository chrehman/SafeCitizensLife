import {StyleSheet} from 'react-native';
import colors from './colors';
import fontFamily from './fontFamily';
import {moderateScale, scale } from './responsiveSize';


export default StyleSheet.create({
    fontSize8: {
        fontSize: moderateScale(8),
        fontFamily:fontFamily.regular,
        color: colors.black
    },
    fontSize10: {
        fontSize: moderateScale(10),
        fontFamily:fontFamily.regular,
        color: colors.black
    },
    fontSize12: {
        fontSize: moderateScale(12),
        fontFamily:fontFamily.regular,
        color: colors.black
    },
    fontSize14: {
        fontSize: moderateScale(14),
        fontFamily:fontFamily.regular,
        color: colors.black
    },
    fontSize16: {
        fontSize: moderateScale(16),
        fontFamily:fontFamily.regular,
        color: colors.black
    },
    fontSize17: {
        fontSize: moderateScale(17),
        fontFamily:fontFamily.regular,
        color: colors.black
    },
    fontSize18: {
        fontSize: moderateScale(18),
        fontFamily:fontFamily.regular,
        color: colors.black
    },
    fontSize20: {
        fontSize: moderateScale(20),
        fontFamily:fontFamily.regular,
        color: colors.black
    },
    fontSize21: {
        fontSize: moderateScale(21),
        fontFamily:fontFamily.regular,
        color: colors.black
    },
    fontSize22: {
        fontSize: moderateScale(22),
        fontFamily:fontFamily.regular,
        color: colors.black
    },
    fontSize23: {
        fontSize: moderateScale(23),
        fontFamily:fontFamily.regular,
        color: colors.black
    },
    fontSize24: {
        fontSize: moderateScale(24),
        color: colors.white,
        fontFamily: fontFamily.medium,
        textTransform: 'uppercase'
    },
    fontSize25: {
        fontSize: moderateScale(25),
        color: colors.white,
        fontFamily: fontFamily.medium,
        textTransform: 'uppercase'
    },
})