import React from 'react'
import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider';
import imagePath from '../../constants/imagePath';
import strings from './../../constants/lng/index';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import LinearGradient from 'react-native-linear-gradient';
import navigationStrings from '../../constants/navigationStrings';
import { moderateScale, scale, verticalScale } from '../../styles/responsiveSize';

const Onboarding = ({navigation}) => {

    const slides = [
        {
            key: 1,
            title: strings.DROWSINESS_DETECTION,
            text: `${strings.SAFE_CITIZENS_LIFE_APPLICATION} ${strings.PROVIDES_YOU_A_DROWSINESS_DETECTION_SYSTEM_IF_YOU_GET_SLEEPY_WHILE_DRIVING}`,
            image: imagePath.onboardingScreen1,
            padding: moderateScale(38, 0.9),
        },
        {
            key: 2,
            title: strings.COLLISION_DETECTION,
            text: `${strings.IF_YOUR_CAR_GETS__INTO_AN_ACCIDENT_WE_WILL_SENT_YOU_AN_ALERT_IF_THERE_IS_NO_RESPONSE_TO_THE_ALERT_WE_WILL_COME_TO_RESCUE_YOU}`,
            image: imagePath.onboardingScreen2,
            padding: moderateScale(37, 0.9),
        },
        {
            key: 3,
            title: strings.RESPONDER_LIVE_TRACKING,
            text: `${strings.IN_CASE_OF_EMERGENCY_YOUR_LOCATION_WILL_BE_SHARED_WITH_NEAREST_RESPONDER_AND_RESPONDER_WILL_BE_DIRECTED_TO_RESCUE_YOU}`,
            image: imagePath.onboardingScreen3,
            padding: moderateScale(33, 0.1),
        },
        {
            key: 4,
            title: strings.INCIDENT_REPORTING,
            text: `${strings.IF_YOU_WITNESS_AN_ACCIDENT_JUST_SHARE_THE_PICTURE_OUR_AI_SYSTEM_WILL_DETECT_THE_ACCIDENT_AND_SHARE_THE_LOCATION}`,
            image: imagePath.onboardingScreen4,
            padding: moderateScale(49, 0.9),
        }
    ];

    const renderItem = ({ item }) => {
        return (
            <View style={styles.slide}>
                <Image source={item.image} style={{ height: verticalScale(400), width: scale(400) }} />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={{ ...styles.text, paddingHorizontal: item.padding }}>{item.text}</Text>
                {item.key === 4 && (
                    <LinearGradient 
                    start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                    colors={[ colors.linearGradient1,colors.green]} style={styles.linearGradient}>
                        <TouchableOpacity onPress={()=> navigation.navigate(navigationStrings.LOGIN)}>
                        <Text style={styles.doneText}>{strings.CONTINUE}</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                )}
            </View>
        );
    }
    return (
        <AppIntroSlider
            renderItem={renderItem}
            data={slides}
            dotStyle={{ backgroundColor: 'rgba(0,181,156,0.19)', marginBottom: verticalScale(200), width: scale(45), height: scale(8) }}
            activeDotStyle={{ backgroundColor: 'rgba(0,181,156,0.7)', marginBottom: verticalScale(200), width: scale(45), height: scale(8) }}
        />
    )
}

export default Onboarding

const styles = StyleSheet.create({
    slide: {
        backgroundColor: colors.white,
        alignItems: 'center',
        paddingTop: verticalScale(60),
        flex: 1,
    },
    title: {
        ...commonStyles.fontSize20,
        color: colors.green,
        textTransform: 'uppercase',
        fontFamily: fontFamily.bold,

        // fontWeight:'bold',
    },
    text: {
        textAlign: 'center',
        ...commonStyles.fontSize12,
        color: colors.textGreen,
        fontFamily: fontFamily.semiBold,
    },
    linearGradient: {
        paddingHorizontal: scale(20),
        paddingVertical: scale(10),
        position: 'absolute',
        bottom: scale(60),
        borderRadius: scale(10),
        shadowOpacity: 0.3,
        shadowColor: colors.blackOpacity50,
        shadowRadius: scale(10),
        shadowOffset: {
            height: scale(5),
            width: scale(2)
        },
        // borderWidth:scale(1),
        elevation: scale(2),
        
    },
    doneText: {
        ...commonStyles.fontSize20,
        color: colors.white,
        textTransform: 'uppercase',
        fontFamily: fontFamily.bold,

    }
})
