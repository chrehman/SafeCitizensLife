import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions, Alert } from 'react-native'
// 3rd Party
import { Input } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
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


let ForgetPasswordValidationSchema = yup.object().shape({
    email: yup.string()
        .email(strings.EMAIL_INVALID)
        .required(strings.EMAIL_REQUIRED),
});

const ForgetPassword = ({ navigation }) => {

    const dispatch = useDispatch()


    return (
        <Formik
            initialValues={{
                email: '',
            }}
            onSubmit={(values, { setSubmitting }) => {
                // setTimeout(() => {
                //     // Alert.alert(JSON.stringify(values, null, 2));
                //     setSubmitting(false);
                // }, 4000);
                dispatch(login(values))
                setSubmitting(false);
            }}
            validationSchema={ForgetPasswordValidationSchema}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isSubmitting, isValid }) => (
                <WrapperContainer  >
                    <ScrollView style={styles.scrollContainer}
                        showsVerticalScrollIndicator={false}
                    >
                        <Header
                            text={strings.RECOVER_PASSWORD}
                        />
                        <RadiusContainer paddingTop={130}>
                            <InputContainer>
                                <Input
                                    placeholder={strings.ENTER_EMAIL_ADDRESS}
                                    keyboardType="email-address"
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                    inputContainerStyle={styles.inputContainerStyle}
                                    leftIcon={
                                        <MaterialCommunityIcons
                                            name='email-outline'
                                            size={icon.size}
                                            color={colors.green}
                                        />
                                    }
                                    rightIcon={
                                        errors.email ?
                                            <Entypo
                                                name='cross'
                                                size={24}
                                                color='red'
                                            />
                                            :
                                            touched.email ?
                                                <AntDesign
                                                    name='check'
                                                    size={24}
                                                    color='green'
                                                /> :
                                                null
                                    }
                                    errorStyle={{ color: 'red' }}
                                    errorMessage={(touched.email && errors.email) ? errors.email : null}
                                />
                            </InputContainer>
                            <BtnCmp
                                onPress={handleSubmit}
                                disabled={!isValid || isSubmitting}
                                isValid={isValid}
                                isSubmitting={isSubmitting}
                                text={strings.SEND_RECOVERY_LINK}
                            />
                            <BtnCmp
                                onPress={()=> navigation.navigate(navigationStrings.LOGIN)}
                                text={strings.BACK}
                            />
                        </RadiusContainer>
                    </ScrollView>
                </WrapperContainer>
            )}
        </Formik>
    )
}

export default ForgetPassword
