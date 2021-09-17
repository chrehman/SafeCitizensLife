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
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/Slices/Login/loginSlice';

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
import { loginValidationSchema } from '../../utils/Validation';
import { signin } from '../../services/Auth';
import { showError, showSuccess } from '../../helper/helperFunctions';
import { getCitizenInfo } from '../../services/Store';
import  AsyncStorage  from '@react-native-async-storage/async-storage';



const Login = ({ navigation }) => {
    const [showPassword, setShowPassword] = useState(true)
    const [isLoading, setIsLoading] = useState(false)

    const dispatch = useDispatch()
    const isLogin = useSelector(state => state.login.isLogin)
    // const state = useNavigationState(state => state);
    // console.log(state)

    return (
        <Formik
            initialValues={{
                email: 'chrehman1998@gmail.com',
                password: 'Rehman@1234',
            }}
            onSubmit={async (values, { setSubmitting }) => {
                signin(values.email, values.password)
                    .then((userCredential) => {
                        // Signed in
                        console.log('Login successful!');
                        let userId = userCredential.user.uid;
                        getCitizenInfo(userId)
                        .then((documentSnapshot) => {
                            showSuccess(strings.SUCCESSFULLY_LOGIN)
                            console.log("USER ID",typeof(userId))
                            AsyncStorage.setItem('uid', userId);
                            let userData = documentSnapshot.data()
                            // console.log(userData)
                            dispatch(login({userId,userData}))
                        })
                        // dispatch(login());
                    })
                    .catch(error => {
                        // Handle Errors here.
                        let errorCode = error.code;
                        let errorMessage = error.message;
                        showError(error.message)
                        // Alert.alert("Error",errorMessage);
                        console.log(errorCode, errorMessage);
                    });
                // dispatch(login(values))
                setSubmitting(false);
            }}
            validationSchema={loginValidationSchema}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isSubmitting, isValid }) => (
                <WrapperContainer isLoading={isSubmitting} >
                    <ScrollView style={styles.scrollContainer}
                        showsVerticalScrollIndicator={false}
                    >
                        <Header
                            logo={imagePath.logo1}
                            text={strings.SAFE_CITIZENS_LIFE} />
                        <RadiusContainer>
                            <Text style={styles.loginText}>
                                {strings.LOGIN}
                            </Text>
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
                            <TouchableOpacity
                                style={styles.forgetButton}
                                onPress={() => navigation.navigate(navigationStrings.FORGET_PASSWORD)}
                            >
                                <Text style={styles.forgotText}>
                                    {strings.FORGOT_PASSWORD}
                                </Text>
                            </TouchableOpacity>
                            <BtnCmp
                                onPress={handleSubmit}
                                disabled={!isValid || isSubmitting}
                                isValid={isValid}
                                isSubmitting={isSubmitting}
                                text={"Login"}
                            />
                            <View style={{ flexDirection: 'row', marginTop: scale(20) }}>
                                <Text style={{ ...styles.forgotText, fontFamily: fontFamily.medium }}>
                                    {strings.HAVENT_REGESTER_YET}
                                </Text>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate(navigationStrings.SIGNUP)}
                                >
                                    <Text style={styles.signupText}>{' '}{strings.SIGNUP}</Text>
                                </TouchableOpacity>
                            </View>
                        </RadiusContainer>
                    </ScrollView>
                </WrapperContainer>
            )}
        </Formik>
    )
}

export default Login
