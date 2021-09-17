import React, { useState, useRef } from 'react'
import { Platform, View, Text, TouchableOpacity, StyleSheet, Button, ScrollView, Dimensions, Alert, ImageBackground, ActivityIndicator, Modal, Pressable } from 'react-native'
// 3rd Party
import { Input } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Formik } from 'formik';
import DropDownPicker from 'react-native-dropdown-picker';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/Slices/Login/loginSlice';
import ActionSheet from "react-native-actions-sheet";
import DateTimePicker from '@react-native-community/datetimepicker';

// constants
import colors from '../../styles/colors';
import navigationStrings from '../../constants/navigationStrings';
import strings from '../../constants/lng';
import icon from '../../constants/icon';

// styles
import fontFamily from '../../styles/fontFamily';
// import icon from '../../constants/icon';
import styles from './style';
import { moderateScale, verticalScale, scale } from '../../styles/responsiveSize';

// components
import BtnCmp from '../../Components/BtnCmp';
import Header from '../../Components/Header'
import RadiusContainer from './../../Components/RadiusContainer';
import WrapperContainer from '../../Components/WrapperContainer';
import InputContainer from './../../Components/InputContainer';
import ImageLoader from '../../Components/ImageLoader';
import Loader from '../../Components/Loader';
import LinearGradientContainer from '../../Components/LinearGradientContainer';
import { openCamera, openGallery } from '../../utils/Camera';
import { signupValidationSchema } from '../../utils/Validation';
import { submitImage } from '../../services/Storage';
import { applyCitizen, getCitizenEmail, getCitizenCnic } from './../../services/Store/index';
import { cleanSingle } from 'react-native-image-crop-picker';
import { showError, showSuccess } from '../../helper/helperFunctions';



const Signup = ({ navigation }) => {
    const [showPassword, setShowPassword] = useState(true)
    const [showConfirmPassword, setShowConfirmPassword] = useState(true)
    const [emailExist, setEmailExist] = useState(false)
    const [openModel, setOpenModel] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [image, setImage] = useState(null);
    const [transferred, setTransferred] = useState(0);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const dispatch=useDispatch();
    
    const onChange = (event, selectedDate, handleChange) => {
        // console.log("Current", selectedDate)
        if (selectedDate) {
            const currentDate = selectedDate || currentDate;
            setShow(Platform.OS === 'ios');
            setCurrentDate(currentDate);
            // console.log(show)
            // console.log(currentDate)
            // console.log(new Date(currentDate).toISOString().split('T')[0]);
            handleChange('dob')(new Date(currentDate).toISOString().split('T')[0])
        } else {
            setShow(false);
        }
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };
    return (
        <Formik
            initialValues={{
                firstName: 'Abdul',
                lastName: 'Rahman',
                email: 'chrehman1998@gmail.com',
                password: 'Rehman@1234',
                confirmPassword: 'Rehman@1234',
                cnic: '12345-1134454-1',
                address: 'asa',
                city: 'rwp',
                country: 'Pakistan',
                phoneNumber: '03123232443',
                bloodGroup: 'A+',
                gender: 'Male',
                urlImg: "https://firebasestorage.googleapis.com/v0/b/safe-citizen-life.appspot.com/o/d5e95017-7f6a-48c1-83af-637ebd0653781630751630370.jpg?alt=media&token=47a8bcf1-7816-4559-b4f4-3dbbc4a778ad",
                dob: "2021-09-04",
            }}
            onSubmit={async (values, { setSubmitting }) => {
                // console.log(values)
                // dispatch(login(values))
                setIsLoading(true)
                getCitizenEmail(values.email)
                    .then(snapshot => {
                        if (snapshot.empty) {
                            getCitizenCnic(values.cnic)
                                .then(snapshot => {
                                    if (snapshot.empty) {
                                        applyCitizen(values)
                                            .then(() => {
                                                setIsLoading(false)
                                                console.log('User added!');
                                                showSuccess(strings.SUCCESSFULLY_APPLIED)
                                                dispatch(login(values))
                                                
                                            })
                                            .catch(error => {
                                                setIsLoading(false)
                                                console.log('Error adding user: ', error);
                                                // Alert.alert("Error", error.message)
                                                showError(error.message)
                                            })
                                            
                                        
                                    }
                                    else{
                                        setIsLoading(false)
                                        console.log('Cnic already exist')
                                        showError(strings.CNIC_ALREADY_EXIST)
                                    }
                                })
                                .catch(error => {
                                    setIsLoading(false)
                                    console.log(error)
                                    showError(error.message)
                                })
                        } else {
                            setIsLoading(false)
                            showError(strings.EMAIL_ALREADY_EXIST)
                        }
                    })
                    .catch(error => {
                        setIsLoading(false)
                        console.log(error);
                        showError(error.message)
                    })
                // console.log(emailExist, "email")
                setSubmitting(false);
            }}
            validationSchema={signupValidationSchema}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isSubmitting, isValid }) => (
                <WrapperContainer isLoading={isLoading} >
                    <ScrollView style={{ ...styles.scrollContainer }}
                        showsVerticalScrollIndicator={false}
                        nestedScrollEnabled={true}
                    >
                        <Header text={strings.SIGNUP} height={250} headMargin={-20} />
                        <RadiusContainer
                            borderTop={120}
                        >
                            <InputContainer>
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
                                    errorStyle={{ color: colors.red }}
                                    errorMessage={(touched.lastName && errors.lastName) ? errors.lastName : null}
                                />
                            </InputContainer>
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
                                            color={colors.darkGreen}
                                        />
                                    }
                                    rightIcon={
                                        errors.email ?
                                            <Entypo
                                                name='cross'
                                                size={icon.size}
                                                color={colors.red}
                                            />
                                            :
                                            touched.email ?
                                                <Feather
                                                    name='check-circle'
                                                    size={icon.size}
                                                    color={colors.darkGreen}
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
                                            size={icon.size}
                                            color={colors.darkGreen}
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
                                                    size={icon.size}
                                                    color={colors.darkGreen}
                                                /> :
                                                <Ionicons
                                                    name='eye-off'
                                                    size={icon.size}
                                                    color={colors.darkGreen}
                                                />
                                            }
                                        </TouchableOpacity>
                                    }
                                />
                            </InputContainer>
                            <InputContainer>
                                <Input
                                    placeholder={strings.CONFIRM_PASSWORD}
                                    onChangeText={handleChange('confirmPassword')}
                                    onBlur={handleBlur('confirmPassword')}
                                    value={values.confirmPassword}
                                    leftIcon={
                                        <Feather
                                            name='lock'
                                            size={icon.size}
                                            color={colors.darkGreen}
                                        />
                                    }
                                    inputContainerStyle={styles.inputContainerStyle}
                                    secureTextEntry={showConfirmPassword}
                                    errorStyle={{ color: colors.red }}
                                    errorMessage={(touched.confirmPassword && errors.confirmPassword) ? errors.confirmPassword : null}
                                    rightIcon={
                                        <TouchableOpacity onPress={() => { setShowConfirmPassword(!showConfirmPassword) }}>
                                            {!showConfirmPassword ?
                                                <Ionicons
                                                    name='eye'
                                                    size={icon.size}
                                                    color={colors.darkGreen}
                                                /> :
                                                <Ionicons
                                                    name='eye-off'
                                                    size={icon.size}
                                                    color={colors.darkGreen}
                                                />
                                            }
                                        </TouchableOpacity>
                                    }
                                />
                            </InputContainer>
                            <InputContainer>
                                <Input
                                    placeholder={strings.ENTER_CNIC}
                                    onChangeText={handleChange('cnic')}
                                    onBlur={handleBlur('cnic')}
                                    value={values.cnic}
                                    keyboardType="phone-pad"
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
                            <InputContainer>
                                <View style={{
                                    ...styles.bloodContainer, width: scale(245), borderBottomColor: colors.darkGreen, borderBottomWidth: scale(2)
                                    , marginHorizontal: scale(10), justifyContent: 'space-between'
                                }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <FontAwesome
                                            name='birthday-cake'
                                            size={icon.size}
                                            color={colors.darkGreen}
                                        />
                                        {!values.dob ? (<Text style={{ ...styles.bloodText, marginLeft: scale(10) }}>{strings.DATE_OF_BIRTH}</Text>) :
                                            <Text style={{ color: colors.black, fontSize: scale(14), fontWeight: '700', marginLeft: scale(10) }}>{values.dob}</Text>
                                        }
                                    </View>
                                    <TouchableOpacity
                                        onPress={showDatepicker}
                                        style={styles.bloodButtonContainer}>
                                        <AntDesign name='caretdown' size={icon.size} color={colors.darkGreen} />
                                    </TouchableOpacity>
                                </View>
                                <Text style={styles.bloodError} >{(touched.dob && errors.dob) ? errors.dob : null}</Text>
                            </InputContainer>
                            <View style={styles.optionContainer}>
                                <InputContainer style={{ marginRight: scale(10) }}>
                                    {/* <View>
                                        <View style={styles.bloodContainer}>
                                            <Fontisto
                                                name='blood-drop'
                                                size={icon.size}
                                                color={colors.darkGreen}
                                            />
                                            <Text>{values.bloodGroup}</Text>
                                            <TouchableOpacity
                                                onPress={showActionSheet}
                                                style={styles.bloodButtonContainer}>
                                                <Text style={styles.bloodText}>Blood Grp</Text>
                                                <AntDesign name='caretdown' size={icon.size} color={colors.darkGreen} />
                                            </TouchableOpacity>
                                        </View>
                                        <Text style={styles.bloodError} >{(touched.bloodGroup && errors.bloodGroup) ? errors.bloodGroup : null}</Text>
                                    </View> */}
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
                                    {/* <View>
                                        <View style={styles.bloodContainer}>
                                            <MaterialCommunityIcons
                                                name='gender-male-female'
                                                size={icon.size}
                                                color={colors.darkGreen}
                                            />
                                            <Text>{values.gender}</Text>
                                            <TouchableOpacity style={styles.bloodButtonContainer}>
                                                <Text style={styles.bloodText}>Gender</Text>
                                                <AntDesign name='caretdown' size={icon.size} color={colors.darkGreen} />
                                            </TouchableOpacity>
                                        </View>
                                        <Text style={styles.bloodError} >{(touched.gender && errors.gender) ? errors.gender : null}</Text>
                                    </View> */}
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
                            <InputContainer style={{ padding: scale(10) }}>
                                <Text style={[styles.text_footer, {
                                    marginBottom: 15,
                                    color: colors.darkGreen,
                                    fontFamily: fontFamily.bold,
                                }]}>Upload Profile Picture</Text>
                                <View style={{ alignItems: 'center' }}>
                                    <TouchableOpacity onPress={() => { setOpenModel(true) }}>
                                        <View
                                            style={{
                                                height: scale(100),
                                                width: scale(100),
                                                borderRadius: scale(15),
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}>
                                            <ImageBackground
                                                source={{
                                                    uri: values.urlImg ? values.urlImg : image,
                                                }}
                                                style={{ height: scale(100), width: scale(100) }}
                                                imageStyle={{ borderRadius: scale(15) }}>
                                                <View
                                                    style={{
                                                        flex: 1,
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                    }}>
                                                    <FontAwesome
                                                        name="camera"
                                                        size={scale(35)}
                                                        color="#d3d3d3"
                                                        style={{
                                                            opacity: 0.7,
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            borderWidth: scale(1),
                                                            borderColor: '#fff',
                                                            borderRadius: scale(10),
                                                        }}
                                                    />
                                                </View>
                                            </ImageBackground>
                                        </View>
                                    </TouchableOpacity>
                                    {/* <Text>{console.log(}</Text> */}
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
                                    onPress={() => { submitImage(image, setUploading, setTransferred, setImage, handleChange) }}
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
                            <Button onPress={showDatepicker} title="Show date picker!" />
                            {/* <Text>{(touched.date && errors.date) ? errors.date : null}</Text> */}
                            <BtnCmp
                                onPress={handleSubmit}
                                disabled={!isValid || isSubmitting}
                                isValid={isValid}
                                isSubmitting={isSubmitting}
                                text={strings.SIGNUP}
                            />
                            <View style={{ flexDirection: 'row', marginTop: scale(20) }}>
                                <Text style={{ ...styles.forgotText, fontFamily: fontFamily.medium }}>
                                    {strings.ALREADY_REGISTER}
                                </Text>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate(navigationStrings.LOGIN)}
                                >
                                    <Text style={styles.signupText}>{' '}{strings.SIGNIN}</Text>
                                </TouchableOpacity>
                            </View>
                            {show && (
                                <DateTimePicker
                                    testID="dateTimePicker"
                                    value={currentDate}
                                    mode={mode}
                                    is24Hour={true}
                                    display="default"
                                    onChange={(event, selectedDate) => { onChange(event, selectedDate, handleChange) }}
                                />
                            )}

                        </RadiusContainer>
                    </ScrollView>
                </WrapperContainer>
            )}
        </Formik>
    )
}

export default Signup


// <DropDownPicker
//                                         // style={{backgroundColor:'crimson',borderWidth:0}}
//                                         listMode="SCROLLVIEW"
//                                         open={open}
//                                         value={value}
//                                         items={items}
//                                         setOpen={setOpen}
//                                         setValue={setValue}
//                                         setItems={setItems}
//                                         placeholder="Select Gender"
//                                         style={{ borderWidth: 0, }}
//                                         containerStyle={{...styles.inputContainer}}
//                                         dropDownContainerStyle={{ borderWidth: 0,height:scale(100) }}
//                                         labelStyle={{ ...commonStyles.fontSize14, fontFamily: fontFamily.bold, color: {colors.darkGreen}, }}
//                                         textStyle={{ color: colors{colors.darkGreen} }}
//                                         ArrowUpIconComponent={({ style }) => <AntDesign name='caretup' size={icon.size} color={colors.darkGreen} />}
//                                         ArrowDownIconComponent={({ style }) => <AntDesign name='caretdown' size={icon.size} color={colors.darkGreen} />}
//                                         closeAfterSelecting={true}
//                                         placeholderStyle={{ ...commonStyles.fontSize14, fontFamily: fontFamily.bold, color: {colors.darkGreen}, }}

//                                         showTickIcon={true}
//                                     />
//                                     <DropDownPicker
//                                         // style={{backgroundColor:'crimson',borderWidth:0}}
//                                         listMode="SCROLLVIEW"
//                                         open={openGender}
//                                         value={valueGender}
//                                         items={itemsGender}
//                                         setOpen={setOpenGender}
//                                         setValue={setValueGender}
//                                         setItems={setItemsGender}
//                                         placeholder="Select Gender"
//                                         style={{ borderWidth: 0, }}
//                                         // containerStyle={{}}
//                                         dropDownContainerStyle={{ borderWidth: 0,height:scale(100) }}
//                                         labelStyle={{ ...commonStyles.fontSize14, fontFamily: fontFamily.bold, color: {colors.darkGreen}, }}
//                                         textStyle={{ color: colors{colors.darkGreen} }}
//                                         ArrowUpIconComponent={({ style }) => <AntDesign name='caretup' size={icon.size} color={colors.darkGreen} />}
//                                         ArrowDownIconComponent={({ style }) => <AntDesign name='caretdown' size={icon.size} color={colors.darkGreen} />}
//                                         closeAfterSelecting={true}
//                                         placeholderStyle={{ ...commonStyles.fontSize14, fontFamily: fontFamily.bold, color: {colors.darkGreen}, }}

//                                         showTickIcon={true}
//                                     />