import React from 'react'
import { StyleSheet, Text, TouchableOpacity,Image } from 'react-native'
import colors from '../styles/colors';

import commonStyles from '../styles/commonStyles';
import fontFamily from '../styles/fontFamily';
import { scale } from '../styles/responsiveSize';

const DrawerRow = ({
    onPress,
    imagePath,
    text,
    ...props
}) => {
    return (
        <TouchableOpacity style={styles.row}
            onPress={onPress}
            {...props}
        >
            <Image source={imagePath} style={{ width: scale(42), height: scale(42) }} />
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

export default DrawerRow

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: scale(10),
        paddingHorizontal: scale(20),
    },
    text: {
        fontFamily: fontFamily.bold,
        color: colors.green,
        marginLeft: scale(10),
        textTransform: 'uppercase',
    }
})
