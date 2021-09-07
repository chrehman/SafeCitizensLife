import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import { scale, verticalScale } from '../../styles/responsiveSize';


const styles = StyleSheet.create({
    linearGradient: {
        marginTop: verticalScale(30),
        marginRight: scale(10),
        marginLeft: scale(25),
        shadowOpacity: 0.5,
        shadowColor: colors.black,
        shadowRadius: scale(10),
        shadowOffset: {
            height: scale(5),
            width: scale(0)
        },
        elevation: scale(10),
        borderRadius: scale(25),
        flexDirection: 'row',
        paddingVertical: scale(10),
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        backgroundColor: colors.white,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: scale(30),
        paddingVertical: scale(10),
        borderRadius: scale(15),
        marginRight: scale(5),
        shadowOpacity: 0.9,
        shadowColor: colors.black,
        shadowRadius: scale(5),
        shadowOffset: {
            height: scale(5),
            width: scale(0)
        },
        elevation: scale(10),
    },
    text: {
        ...commonStyles.fontSize18,
        fontFamily: fontFamily.bold,
        color: colors.forgetColor,
        textTransform: 'uppercase',
    },
    imageContainer: {
        position: 'absolute',
        elevation: scale(20),
        left: scale(-25),
        shadowOpacity: 0.3,
        shadowColor: colors.black,
        shadowRadius: scale(5),
        shadowOffset: {
            height: scale(5),
            width: scale(0)
        },
    },
    button: {
        borderRadius: scale(20),
        padding: scale(10),
        elevation: scale(10),
        marginVertical: scale(10),
        shadowOpacity: 0.3,
        shadowColor: colors.black,
        shadowRadius: scale(5),
        shadowOffset: {
            height: scale(5),
            width: scale(0)
        },
    },
    textStyle: {
        ...commonStyles.fontSize18,
        color: "white",
        fontFamily: fontFamily.bold,
        textAlign: "center",
        textTransform: 'uppercase',
    },
    footerContainer: {
        marginHorizontal: scale(10),
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: verticalScale(30)
    },
    slideContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: scale(20)
    },
    carContainer: {
        backgroundColor: colors.white,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: scale(8),
        paddingHorizontal: scale(5)
    },
    carImage: {
        width: scale(35),
        height: scale(35),
        marginRight: scale(5)
    },
    carText: {
        ...commonStyles.fontSize8,
        color: colors.forgetColor,
        fontFamily: fontFamily.bold,
        textTransform: 'uppercase'
    },
    messageContainer: {
        position: 'absolute',
        top: verticalScale(150),
        bottom: 0,
        right: scale(10),
        backgroundColor: colors.white,
        width: scale(56),
        height: scale(56),
        borderRadius: scale(28),
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: colors.shadowColor,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: scale(5)
    },
    messageIcon: {
        width: scale(40),
        height: scale(40)
    }
})


export default styles;