import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions, Alert } from 'react-native'
// 3rd Party
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
// constants
import colors from '../../styles/colors'
import strings from '../../constants/lng/index'
// styles
import icon from '../../constants/icon';
import styles from './style';

// components
import BtnCmp from '../../Components/BtnCmp';
import Header from '../../Components/Header'
import RadiusContainer from './../../Components/RadiusContainer';
import WrapperContainer from '../../Components/WrapperContainer';
import InputContainer from './../../Components/InputContainer';
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../constants/navigationStrings';
import { scale, verticalScale } from '../../styles/responsiveSize';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import fontFamily from '../../styles/fontFamily';
import commonStyles from '../../styles/commonStyles';

const Status = ({ navigation }) => {

    return (
        <WrapperContainer  >
            <ScrollView style={styles.scrollContainer}
                showsVerticalScrollIndicator={false}
            >
                <Header
                    height={275}
                    headMargin={20}
                    logo={imagePath.applicationStatusIcon}
                    text={strings.APPLICATION_STATUS}
                    fontSize={21}
                    textStyle={styles.headerStyle}
                />
                <RadiusContainer
                    borderTop={145}
                    bottom={140}
                    paddingTop={150}
                    padding={18}
                >
                    <Text style={styles.dearUser}>{strings.DEAR_USER_YOUR_APPLICATION_IS_UNDER_REVIEW_YOU_WILL_GET_ACCESS_TO_THE_APPLICATION_ONCE_YOUR_APPLICATION_IS_ACCEPTED}</Text>
                    <Text style={styles.notify}
                    >{strings.YOU_WILL_BE_NOTIFIED_VIA_EMAIL}</Text>
                    <BtnCmp
                        text={strings.LEARN_TRAFFIC_RULES}
                        btnStyle={styles.btnStyle}
                    />
                    <BtnCmp
                        text={strings.LOGIN}
                        btnStyle={styles.btnStyle}
                        onPress={() => navigation.navigate(navigationStrings.LOGIN)}
                    />
                </RadiusContainer>
            </ScrollView>
        </WrapperContainer>
    )
}

export default Status
