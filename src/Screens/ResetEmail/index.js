import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions, Alert } from 'react-native'
// 3rd Party
import { Input } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/Slices/Login/loginSlice';
import ImagePicker from 'react-native-image-crop-picker'
// constants
import colors from '../../styles/colors';
import navigationStrings from '../../constants/navigationStrings';
import strings from '../../constants/lng';

// styles
import fontFamily from '../../styles/fontFamily';
import icon from '../../constants/icon';
import styles from './style';
import { moderateScale, verticalScale, scale } from '../../styles/responsiveSize';

// components
import BtnCmp from '../../Components/BtnCmp';
import Header from '../../Components/Header'
import RadiusContainer from './../../Components/RadiusContainer';
import WrapperContainer from '../../Components/WrapperContainer';
import InputContainer from './../../Components/InputContainer';
import imagePath from '../../constants/imagePath';
import { resetEmailValidationSchema } from '../../utils/Validation';

const ResetEmail = ({ navigation }) => {
    const [showPassword, setShowPassword] = useState(true)
    const dispatch = useDispatch()
    const isLogin = useSelector(state => state.login.isLogin)
    // const state = useNavigationState(state => state);
    // console.log(state)

    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            onSubmit={(values, { setSubmitting }) => {
                // setTimeout(() => {
                //     // Alert.alert(JSON.stringify(values, null, 2));
                //     setSubmitting(false);
                // }, 4000);
                dispatch(login(values))
                setSubmitting(false);
            }}
            validationSchema={resetEmailValidationSchema}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isSubmitting, isValid }) => (
                <WrapperContainer  >
                    <ScrollView style={styles.scrollContainer}
                        showsVerticalScrollIndicator={false}
                    >
                        <Header
                            logo={imagePath.editEmailIconWhite}
                            text={strings.RESET_EMAIL} />
                        <RadiusContainer>
                            <Text style={styles.loginText}>
                                {strings.LOGIN}
                            </Text>
                            <InputContainer>
                                <Input
                                    placeholder={strings.ENTER_NEW_EMAIL_ADDRESS}
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
                                                color={colors.red}
                                            />
                                            :
                                            touched.email ?
                                                <AntDesign
                                                    name='check'
                                                    size={24}
                                                    color={colors.green}
                                                /> :
                                                null
                                    }
                                    errorStyle={{ color: colors.red }}
                                    errorMessage={(touched.email && errors.email) ? errors.email : null}
                                />
                            </InputContainer>
                            <InputContainer>
                                <Input
                                    placeholder={strings.ENTER_PASSWORD}
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                    leftIcon={
                                        <Feather
                                            name='lock'
                                            size={24}
                                            color={colors.green}
                                        />
                                    }
                                    inputContainerStyle={styles.inputContainerStyle}
                                    secureTextEntry={showPassword}
                                    errorStyle={{ color: colors.red }}
                                    errorMessage={(touched.password && errors.password) ? errors.password : null}
                                    rightIcon={
                                        <TouchableOpacity onPress={() => { setShowPassword(!showPassword) }}>
                                            {!showPassword ?
                                                <Ionicons
                                                    name='eye'
                                                    size={24}
                                                    color={colors.green}
                                                /> :
                                                <Ionicons
                                                    name='eye-off'
                                                    size={24}
                                                    color={colors.green}
                                                />
                                            }
                                        </TouchableOpacity>
                                    }
                                />
                            </InputContainer>
                            <BtnCmp
                                onPress={handleSubmit}
                                disabled={!isValid || isSubmitting}
                                isValid={isValid}
                                isSubmitting={isSubmitting}
                                text={"Login"}
                            />
                        </RadiusContainer>
                    </ScrollView>
                </WrapperContainer>
            )}
        </Formik>
    )
}

export default ResetEmail
