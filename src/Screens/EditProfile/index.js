import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions, Alert, ImageBackground } from 'react-native'
// 3rd Party
import { Input } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
// constants
import colors from '../../styles/colors'
import strings from '../../constants/lng/index'
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../constants/navigationStrings';

// styles
import icon from '../../constants/icon';
import styles from './style';
import { scale, verticalScale } from '../../styles/responsiveSize';
import fontFamily from '../../styles/fontFamily';

// components
import BtnCmp from '../../Components/BtnCmp';
import Header from '../../Components/Header'
import RadiusContainer from './../../Components/RadiusContainer';
import WrapperContainer from '../../Components/WrapperContainer';
import InputContainer from './../../Components/InputContainer';
import LinearGradientContainer from '../../Components/LinearGradientContainer';
import ImageLoader from '../../Components/ImageLoader';
import Loader from '../../Components/Loader';

import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { editProfileValidationSchema } from '../../utils/Validation';


const EditProfile = ({ navigation }) => {
    const [openModel, setOpenModel] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [image, setImage] = useState(null);
    const [transferred, setTransferred] = useState(0);

    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                cnic: '',
                address: '',
                city: '',
                country: '',
                phoneNumber: '',
                bloodGroup: '',
                gender: '',
                urlImg: '',
            }}
            onSubmit={(values, { setSubmitting }) => {
                // setTimeout(() => {
                //     // Alert.alert(JSON.stringify(values, null, 2));
                //     setSubmitting(false);
                // }, 4000);
                dispatch(login(values))
                setSubmitting(false);
            }}
            validationSchema={editProfileValidationSchema}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isSubmitting, isValid }) => (
                <WrapperContainer  >
                    <ScrollView style={styles.scrollContainer}
                        showsVerticalScrollIndicator={false}
                    >
                        <Header
                            height={250}
                            headMargin={20}
                            logo={imagePath.profileIconWhite}
                            text={strings.EDIT_PROFILE}
                            fontSize={21}
                        />
                        <RadiusContainer
                            borderTop={115}
                            bottom={140}
                            paddingTop={20}
                        >
                            <InputContainer style={{ padding: scale(10) }}>
                                <Text style={[styles.text_footer, {
                                    marginBottom: 15,
                                    color: colors.darkGreen,
                                    fontFamily: fontFamily.medium,
                                }]}>Upload Profile Picture</Text>
                                <View style={{ alignItems: 'center' }}>
                                    <TouchableOpacity onPress={() => { setOpenModel(true) }}>
                                        <View
                                            style={{
                                                height: scale(50),
                                                width: scale(50),
                                                borderRadius: scale(50),
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}>
                                            <ImageBackground
                                                source={{
                                                    uri: values.urlImg ? values.urlImg : image,
                                                }}
                                                style={{ height: 100, width: 100 }}
                                                imageStyle={{ borderRadius: 15 }}>
                                                <View
                                                    style={{
                                                        flex: 1,
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                    }}>
                                                    <FontAwesome
                                                        name="camera"
                                                        size={35}
                                                        color="#d3d3d3"
                                                        style={{
                                                            opacity: 0.7,
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            borderWidth: 1,
                                                            borderColor: '#fff',
                                                            borderRadius: 10,
                                                        }}
                                                    />
                                                </View>
                                            </ImageBackground>
                                        </View>
                                    </TouchableOpacity>
                                    {openModel ? <ImageLoader
                                        openCamera={() => openCamera(setImage, setOpenModel)}
                                        openGallery={() => openGallery(setImage, setOpenModel)}
                                        closeModel={() => { setOpenModel(!openModel) }}
                                    /> : null}
                                    {(touched.urlImg && errors.urlImg) ?
                                        <Text style={styles.bloodError}>{errors.urlImg}</Text>
                                        : null
                                    }
                                </View>
                                <LinearGradientContainer
                                    onPress={() => { submitImage(setUploading, setTransferred, setImage, handleChange) }}
                                    text='Upload'
                                    disabled={image === null}
                                />
                            </InputContainer>
                            {uploading ?
                                <Loader
                                    text={`Uploading is ${transferred} done`}
                                    isLoading={uploading}
                                />
                                : null}
                            <InputContainer style={{ marginRight: scale(10) }}>
                                <Input
                                    placeholder={strings.ENTER_FIRST_NAME}
                                    onChangeText={handleChange('firstName')}
                                    onBlur={handleBlur('firstName')}
                                    value={values.firstName}
                                    inputContainerStyle={styles.inputContainerStyle}
                                    leftIcon={
                                        <Ionicons
                                            name='person-outline'
                                            size={icon.size}
                                            color={colors.darkGreen}
                                        />
                                    }
                                    rightIcon={
                                        errors.firstName ?
                                            <Entypo
                                                name='cross'
                                                size={icon.size}
                                                color={colors.red}
                                            />
                                            :
                                            touched.email ?
                                                <AntDesign
                                                    name='check'
                                                    size={icon.size}
                                                    color={colors.darkGreen}
                                                /> :
                                                null
                                    }
                                    errorStyle={{ color: colors.red }}
                                    errorMessage={(touched.firstName && errors.firstName) ? errors.firstName : null}
                                />
                            </InputContainer>
                            <InputContainer>
                                <Input
                                    placeholder={strings.ENTER_LAST_NAME}
                                    onChangeText={handleChange('lastName')}
                                    onBlur={handleBlur('lastName')}
                                    value={values.lastName}
                                    inputContainerStyle={styles.inputContainerStyle}
                                    leftIcon={
                                        <Ionicons
                                            name='person-outline'
                                            size={icon.size}
                                            color={colors.darkGreen}
                                        />
                                    }
                                    rightIcon={
                                        errors.lastName ?
                                            <Entypo
                                                name='cross'
                                                size={icon.size}
                                                color={colors.red}
                                            />
                                            :
                                            touched.lastName ?
                                                <AntDesign
                                                    name='check'
                                                    size={icon.size}
                                                    color={colors.darkGreen}
                                                /> :
                                                null
                                    }
                                    errorStyle={{ color: colors.red }}
                                    errorMessage={(touched.lastName && errors.lastName) ? errors.lastName : null}
                                />
                            </InputContainer>
                            <InputContainer>
                                <Input
                                    placeholder={strings.ENTER_CNIC}
                                    onChangeText={handleChange('cnic')}
                                    onBlur={handleBlur('cnic')}
                                    value={values.cnic}
                                    keyboardType="phone-pad"
                                    editable={false}
                                    leftIcon={
                                        <AntDesign
                                            name='idcard'
                                            size={icon.size}
                                            color={colors.darkGreen}
                                        />
                                    }
                                    inputContainerStyle={styles.inputContainerStyle}
                                    errorStyle={{ color: colors.red }}
                                    errorMessage={(touched.cnic && errors.cnic) ? errors.cnic : null}
                                />
                            </InputContainer>
                            <InputContainer>
                                <Input
                                    placeholder={strings.ENTER_ADDRESS}
                                    onChangeText={handleChange('address')}
                                    onBlur={handleBlur('address')}
                                    value={values.address}
                                    leftIcon={
                                        <Entypo
                                            name='address'
                                            size={icon.size}
                                            color={colors.darkGreen}
                                        />
                                    }
                                    inputContainerStyle={styles.inputContainerStyle}
                                    errorStyle={{ color: colors.red }}
                                    errorMessage={(touched.address && errors.address) ? errors.address : null}
                                />
                            </InputContainer>
                            <InputContainer>
                                <Input
                                    placeholder={strings.ENTER_CITY}
                                    onChangeText={handleChange('city')}
                                    onBlur={handleBlur('city')}
                                    value={values.city}
                                    leftIcon={
                                        <MaterialCommunityIcons
                                            name='home-city-outline'
                                            size={icon.size}
                                            color={colors.darkGreen}
                                        />
                                    }
                                    inputContainerStyle={styles.inputContainerStyle}
                                    errorStyle={{ color: colors.red }}
                                    errorMessage={(touched.city && errors.city) ? errors.city : null}
                                />
                            </InputContainer>
                            <InputContainer>
                                <Input
                                    placeholder={strings.ENTER_COUNTRY}
                                    onChangeText={handleChange('country')}
                                    onBlur={handleBlur('country')}
                                    value={values.country}
                                    leftIcon={
                                        <Ionicons
                                            name='flag-outline'
                                            size={icon.size}
                                            color={colors.darkGreen}
                                        />
                                    }
                                    inputContainerStyle={styles.inputContainerStyle}
                                    errorStyle={{ color: colors.red }}
                                    errorMessage={(touched.country && errors.country) ? errors.country : null}
                                />
                            </InputContainer>
                            <InputContainer>
                                <Input
                                    placeholder={strings.ENTER_PHONE_NUMBER}
                                    onChangeText={handleChange('phoneNumber')}
                                    onBlur={handleBlur('phoneNumber')}
                                    value={values.phoneNumber}
                                    keyboardType="phone-pad"
                                    leftIcon={
                                        <Feather
                                            name='phone'
                                            size={icon.size}
                                            color={colors.darkGreen}
                                        />
                                    }
                                    inputContainerStyle={styles.inputContainerStyle}
                                    errorStyle={{ color: colors.red }}
                                    errorMessage={(touched.phoneNumber && errors.phoneNumber) ? errors.phoneNumber : null}
                                />
                            </InputContainer>
                            <View style={styles.optionContainer}>
                                <InputContainer style={{ marginRight: scale(10) }}>
                                    <Input
                                        placeholder='Blood Grp'
                                        onChangeText={handleChange('bloodGroup')}
                                        onBlur={handleBlur('bloodGroup')}
                                        value={values.bloodGroup}
                                        leftIcon={
                                            <Fontisto
                                                name='blood-drop'
                                                size={icon.size}
                                                color={colors.darkGreen}
                                            />
                                        }
                                        inputContainerStyle={styles.inputContainerStyle}
                                        errorStyle={{ color: colors.red }}
                                        errorMessage={(touched.bloodGroup && errors.bloodGroup) ? errors.bloodGroup : null}
                                    />
                                </InputContainer>
                                <InputContainer >
                                    <Input
                                        placeholder='Gender'
                                        onChangeText={handleChange('gender')}
                                        onBlur={handleBlur('gender')}
                                        value={values.gender}
                                        leftIcon={
                                            <MaterialCommunityIcons
                                                name='gender-male-female'
                                                size={icon.size}
                                                color={colors.darkGreen}
                                            />
                                        }
                                        inputContainerStyle={styles.inputContainerStyle}
                                        errorStyle={{ color: colors.red }}
                                        errorMessage={(touched.gender && errors.gender) ? errors.gender : null}
                                    />
                                </InputContainer>
                            </View>
                            <BtnCmp
                                onPress={handleSubmit}
                                disabled={!isValid || isSubmitting}
                                isValid={isValid}
                                isSubmitting={isSubmitting}
                                text={strings.SAVE}
                            />
                        </RadiusContainer>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            position: 'absolute',
                            top: verticalScale(130),
                            right: scale(20),
                            width: scale(50)
                        }}>
                            <MaterialCommunityIcons
                                name='email-edit-outline'
                                size={icon.size}
                                color={colors.forgetColor}
                            />
                            <Ionicons
                                name='lock-open-outline'
                                size={icon.size}
                                color={colors.forgetColor}
                            />
                        </View>
                    </ScrollView>
                </WrapperContainer>
            )}
        </Formik>
    )
}

export default EditProfile
