import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import colors from '../styles/colors';

import commonStyles from '../styles/commonStyles';
import fontFamily from '../styles/fontFamily';
import { scale } from '../styles/responsiveSize';

const DrawerRow = ({
    onPress,
    imageStyle,
    imagePath,
    textStyle,
    rowStyle,
    text,
    ...props
}) => {
    return (
        <TouchableOpacity style={{ ...styles.row, ...rowStyle }}
            onPress={onPress}
            {...props}
        >
            <Avatar
                
                source={imagePath}
                activeOpacity={0.7}
                containerStyle={{...styles.image,...imageStyle}}
            />
            <Text style={{...styles.text,...textStyle}}>{text}</Text>
        </TouchableOpacity>
    )
}

export default DrawerRow

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: scale(8),
        paddingHorizontal: scale(20),
    },
    text: {
        fontSize: scale(12),
        fontFamily: fontFamily.bold,
        color: colors.green,
        marginLeft: scale(10),
        textTransform: 'uppercase',
    },
    image: {
        width: scale(36), height: scale(36),
        padding: scale(5),
        // borderColor: colors.green,
        // borderWidth: scale(1),
        borderRadius: scale(18),
        
    }
})
