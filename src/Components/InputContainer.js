import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../styles/colors'
import { scale } from '../styles/responsiveSize'

const InputContainer = ({
    children,
    style
}) => {
    return (
        <View style={{...styles.inputContainer,...style}}>
            {children}
        </View>
    )
}

export default InputContainer

const styles = StyleSheet.create({
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
})
