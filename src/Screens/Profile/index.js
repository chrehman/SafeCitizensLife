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
import styles from './styles';

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

const Profile = ({ navigation }) => {


    return (
        <WrapperContainer  >
            <ScrollView style={styles.scrollContainer}
                showsVerticalScrollIndicator={false}
            >
                <Header
                    height={250}
                    headMargin={20}
                    logo={imagePath.profileIconWhite}
                    text={strings.USER_PROFILE}
                    fontSize={21}
                />
                <RadiusContainer
                    borderTop={115}
                    bottom={140}
                    paddingTop={20}
                >
                    <Avatar size={scale(100)} rounded source={imagePath.userIcon} />
                    <View style={styles.nameContainer}>
                        <InputContainer style={{ marginRight: scale(10) }}>
                            <Text style={styles.textStyle}>{strings.FIRST_NAME}</Text>
                            <View style={styles.row}>
                                <Ionicons
                                    name='person-outline'
                                    size={icon.size}
                                    color={colors.darkGreen}
                                />
                                <Text style={styles.input}>Abdul</Text>
                            </View>
                        </InputContainer>
                        <InputContainer>
                            <Text style={styles.textStyle}>{strings.LAST_NAME}</Text>
                            <View style={styles.row}>
                                <Ionicons
                                    name='person-outline'
                                    size={icon.size}
                                    color={colors.darkGreen}
                                />
                                <Text style={styles.input}>Rahman</Text>
                            </View>
                        </InputContainer>
                    </View>
                    <InputContainer>
                        <View style={styles.inputContainerStyle}>
                            <Text style={styles.textStyle}>{strings.EMAIL}</Text>
                            <View style={styles.row}>
                                <MaterialCommunityIcons
                                    name='email-outline'
                                    size={icon.size}
                                    color={colors.darkGreen}
                                />
                                <Text style={styles.input}>Abduladsasdasdsdsadsadsadsd sadsdsad sadsadsa</Text>
                            </View>
                        </View>
                    </InputContainer>
                    <InputContainer>
                        <View style={styles.inputContainerStyle}>
                            <Text style={styles.textStyle}>{strings.CNIC}</Text>
                            <View style={styles.row}>
                                <AntDesign
                                    name='idcard'
                                    size={icon.size}
                                    color={colors.darkGreen}
                                />
                                <Text style={styles.input}>Abdul</Text>
                            </View>
                        </View>
                    </InputContainer>
                    <InputContainer>
                        <View style={styles.inputContainerStyle}>
                            <Text style={styles.textStyle}>{strings.ADDRESS}</Text>
                            <View style={styles.row}>
                                <Entypo
                                    name='address'
                                    size={icon.size}
                                    color={colors.darkGreen}
                                />
                                <Text style={styles.input}>Abdul</Text>
                            </View>
                        </View>
                    </InputContainer>
                    <InputContainer>
                        <View style={styles.inputContainerStyle}>
                            <Text style={styles.textStyle}>{strings.CITY}</Text>
                            <View style={styles.row}>
                                <MaterialCommunityIcons
                                    name='home-city-outline'
                                    size={icon.size}
                                    color={colors.darkGreen}
                                />
                                <Text style={styles.input}>Abdul</Text>
                            </View>
                        </View>
                    </InputContainer>
                    <InputContainer>
                        <View style={styles.inputContainerStyle}>
                            <Text style={styles.textStyle}>{strings.COUNTRY}</Text>
                            <View style={styles.row}>
                                <Ionicons
                                    name='flag-outline'
                                    size={icon.size}
                                    color={colors.darkGreen}
                                />
                                <Text style={styles.input}>Abdul</Text>
                            </View>
                        </View>
                    </InputContainer>
                    <InputContainer>
                        <View style={styles.inputContainerStyle}>
                            <Text style={styles.textStyle}>{strings.PHONE_NUMBER}</Text>
                            <View style={styles.row}>
                                <Feather
                                    name='phone'
                                    size={icon.size}
                                    color={colors.darkGreen}
                                />
                                <Text style={styles.input}>Abdul</Text>
                            </View>
                        </View>
                    </InputContainer>
                    <InputContainer>
                        <View style={styles.inputContainerStyle}>
                            <Text style={styles.textStyle}>{strings.DATE_OF_BIRTH}</Text>
                            <View style={styles.row}>
                                <FontAwesome
                                    name='birthday-cake'
                                    size={icon.size}
                                    color={colors.darkGreen}
                                />
                                <Text style={styles.input}>Abdul</Text>
                            </View>
                        </View>
                    </InputContainer>
                    <View style={styles.nameContainer}>
                        <InputContainer style={{ marginRight: scale(10) }}>
                            <Text style={styles.textStyle}>{strings.GENDER}</Text>
                            <View style={styles.row}>
                                <Fontisto
                                    name='blood-drop'
                                    size={icon.size}
                                    color={colors.darkGreen}
                                />
                                <Text style={styles.input}>Male</Text>
                            </View>
                        </InputContainer>
                        <InputContainer>
                            <Text style={styles.textStyle}>{strings.BLOOD_GROUP}</Text>
                            <View style={styles.row}>
                                <MaterialCommunityIcons
                                    name='gender-male-female'
                                    size={icon.size}
                                    color={colors.darkGreen}
                                />
                                <Text style={styles.input}>A+</Text>
                            </View>
                        </InputContainer>
                    </View>
                </RadiusContainer>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    position: 'absolute',
                    top: verticalScale(130),
                    right: scale(20),
                }}>
                    <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.EDIT_PROFILE)}>
                        <MaterialCommunityIcons
                            name='square-edit-outline'
                            size={icon.size}
                            color={colors.forgetColor}
                        />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </WrapperContainer>

    )
}

export default Profile
