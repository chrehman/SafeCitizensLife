import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import colors from '../styles/colors'
import commonStyles from '../styles/commonStyles'
import fontFamily from '../styles/fontFamily'
import { moderateScale, scale } from '../styles/responsiveSize'

const BtnCmp = ({
    onPress,
    text,
    isValid = true,
    isSubmitting = false,
    btnStyle,
    textStyle,
    disabled = false,
    ...props
}) => {
    return (
        <LinearGradient
            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
            colors={disabled?['#eeee','#ededee','#e5e5e5']:[colors.linearGradient1, colors.green]}
            style={{ ...styles.gradientContainer, backgroundColor: !isValid || isSubmitting ? 'grey' : 'lightblue', ...btnStyle }} >
            <TouchableOpacity
                onPress={onPress}
                disabled={disabled}
                {...props}
                style={{ ...styles.btnContainer }}
            >
                <Text style={{ ...styles.text, ...textStyle }}>{text}</Text>
            </TouchableOpacity>
        </LinearGradient>



    )
}

export default BtnCmp

const styles = StyleSheet.create({
    gradientContainer: {
        borderTopLeftRadius: scale(10),
        borderBottomRightRadius: scale(10),
        paddingVertical: scale(10),
        marginTop: scale(12),
        borderBottomLeftRadius: moderateScale(1, 0.9),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
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
    btnContainer: {

    },
    text: {
        ...commonStyles.fontSize20,
        color: colors.white,
        fontFamily: fontFamily.bold,
        textTransform: 'uppercase'
    }
})
