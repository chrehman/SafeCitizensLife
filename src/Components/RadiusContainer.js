import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../styles/colors'
import { scale } from '../styles/responsiveSize'

const RadiusContainer = ({
    children,
    borderTop = 155,
    bottom = 122,
    padding = 40,
    paddingTop = 40,
}) => {
    return (
        <View style={{ ...styles.loginContainer, bottom: scale(bottom),paddingTop:scale(paddingTop), padding: scale(padding),borderTopLeftRadius:scale(borderTop) }}>
            {children}
        </View>
    )
}

export default RadiusContainer

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        borderRightWidth: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        overflow: 'hidden',
        // backgroundColor: 'transparent',
        
        shadowOpacity: 1,
        shadowColor: colors.black,
        shadowRadius: scale(10),
        shadowOffset: {
            height: scale(5),
            width: scale(0)
        },
        // borderWidth:scale(1),

    },
})
