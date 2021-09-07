import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import { scale } from '../../styles/responsiveSize';

const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
        backgroundColor: '#fff'
    },
    inputContainerStyle: {
        padding: scale(0),
        borderBottomColor: colors.green,
        width: scale(260),
    },
    nameContainer: {
        flexDirection: 'row',
        flex: 1
    },
    textStyle: {
        fontFamily: fontFamily.bold,
        color: colors.forgetColor,
        textTransform: 'uppercase'
    },
    row: {
        borderBottomColor: colors.darkGreen,
        borderBottomWidth: 2,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        marginLeft: scale(10),
        fontFamily: fontFamily.bold,
        color: colors.darkGreen,
        flex: 1
    }
    
})
export default styles;