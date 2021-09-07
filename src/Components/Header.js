import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import fontFamily from '../styles/fontFamily';
import { scale, verticalScale } from '../styles/responsiveSize';

const Header = ({
    height = 300,
    text,
    fontSize=24,
    headMargin = 40,
    textStyle,
    logo
}) => {
    return (
        <LinearGradient colors={[colors.green, colors.linearGradient1]}
        // locations={[0,0.53,1]}
            style={{ height: verticalScale(height) }} >
            <View style={{ ...styles.headContainer, marginTop: verticalScale(headMargin) }}>
                    <Image source={logo} style={styles.logo} />
                <Text style={{ ...styles.text,fontSize:scale(fontSize),...textStyle }}>{text}</Text>
            </View>
        </LinearGradient>
    )
}

export default Header

const styles = StyleSheet.create({
    headContainer: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        textTransform: 'uppercase',
        ...commonStyles.fontSize24,
        fontFamily: fontFamily.bold
    },
    logo: {
        height: verticalScale(71),
        width: verticalScale(71),
    }

})
