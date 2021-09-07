import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import colors from '../styles/colors'
import fontFamily from '../styles/fontFamily'
import { scale } from '../styles/responsiveSize'

const LinearGradientContainer = (
    { onPress,
        text,
        styleGradient,
        textStyle,
        disabled=false,
        ...props
    }
) => {
    return (
        <LinearGradient
            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
            colors={disabled?['#eeee','#ededee','#e5e5e5']:[colors.linearGradient1, colors.green]}
            style={{ ...styles.button, ...styleGradient }} >
            <TouchableOpacity
                onPress={onPress}
                disabled={disabled}
                {...props}
            >
                <Text style={{ ...styles.textStyle, ...textStyle }}>{text}</Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}

export default LinearGradientContainer

const styles = StyleSheet.create({
    button: {
        borderRadius: scale(20),
        padding: scale(10),
        elevation: scale(2),
        marginVertical: scale(10)
    },
    textStyle: {
        color: "white",
        fontFamily: fontFamily.bold,
        textAlign: "center"
    },
})
