import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import { scale } from '../../styles/responsiveSize';

const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
        backgroundColor: '#fff'
    },
    loginText: {
        borderBottomColor: colors.green,
        borderBottomWidth: 2,
        ...commonStyles.fontSize22,
        color: colors.green,
        fontFamily: fontFamily.bold,
        textTransform: 'uppercase',
        marginBottom: scale(20),
    },

    inputContainerStyle: {
        padding: scale(0),
        borderBottomColor: colors.green,
        borderBottomWidth: 2,
        width: '100%',
    },
    containerStyle: {
        paddingTop: scale(7),
    },
    forgetButton:{
        alignSelf: 'flex-start',
        
    },
    forgotText: {
        textTransform: 'uppercase',
        borderBottomColor: colors.forgetColor,
        borderBottomWidth: 1,
        color: colors.forgetColor,
        fontFamily: fontFamily.mediumItalic,
        fontSize: scale(12),
    },
    signupText: {
        ...commonStyles.fontSize14,
        fontFamily: fontFamily.bold,
        color: colors.green,
        textTransform: 'uppercase'
    },
})
export default styles;