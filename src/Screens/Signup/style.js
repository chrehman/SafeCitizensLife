import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import { scale } from '../../styles/responsiveSize';

const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
    },
    loginText: {
        borderBottomColor: colors.green,
        borderBottomWidth: 2,
        ...commonStyles.fontSize20,
        color: colors.green,
        fontFamily: fontFamily.bold,
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
    forgotText: {
        alignSelf: 'flex-start',
        textTransform: 'uppercase',
        borderBottomColor: colors.green,
        borderBottomWidth: 1,
        color: colors.green,
        fontFamily: fontFamily.italic
    },
    signupText: {
        ...commonStyles.fontSize14,
        fontFamily: fontFamily.bold,
        color: colors.green,
        textTransform: 'uppercase'
    },
    optionContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    bloodContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    bloodButtonContainer: {
        padding: scale(7),
        flexDirection: 'row',
        alignItems:'baseline',
        // justifyContent: 'space-between',
    },
    bloodText: {
        fontSize:scale(18),
        color: colors.grey,
        marginRight: scale(12)
    },
    bloodError: {
        fontSize: 12,
        color: 'red'
    },
    inputContainer: {
        flex: 1,
        // flexDirection: 'row',
        backgroundColor: colors.white,
        borderRadius: scale(10),
        padding: scale(3),
        marginVertical: scale(10),
        shadowOpacity: 0.3,
        shadowColor: colors.black,
        shadowRadius: scale(10),
        shadowOffset: {
            height: scale(5),
            width: scale(0)
        },
        // borderWidth:scale(1),
        elevation: scale(3),
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    button: {
        borderRadius: scale(20),
        padding: scale(10),
        elevation: scale(2),
        marginTop: scale(10),
    },
    buttonClose: {
        backgroundColor: colors.green,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
})
export default styles;