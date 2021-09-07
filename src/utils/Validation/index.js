import * as yup from 'yup';
import strings from '../../constants/lng';


export let loginValidationSchema = yup.object().shape({
    email: yup.string()
        .email(strings.EMAIL_INVALID)
        .required(strings.EMAIL_REQUIRED),
    password: yup.string()
        .min(8, ({ min }) => `Password must be at least ${min} characters long`)
        .required(strings.PASSWORD_REQUIRED)
        // .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, strings.PASSWORD_INVALID),
});

export let signupValidationSchema = yup.object().shape({
    firstName: yup.string()
        .required(strings.FIRST_NAME_REQUIRED)
        .matches(/^[a-zA-Z]+$/, strings.FIRST_NAME_INVALID),
    lastName: yup.string()
        .required(strings.LAST_NAME_REQUIRED)
        .matches(/^[a-zA-Z]+$/, strings.LAST_NAME_INVALID),
    email: yup.string()
        .email(strings.EMAIL_INVALID)
        .required(strings.EMAIL_REQUIRED),
    password: yup.string()
        .min(8, ({ min }) => `Password must be at least ${min} characters long`)
        .required(strings.PASSWORD_REQUIRED)
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, strings.PASSWORD_INVALID),
    confirmPassword: yup.string()
        .required(strings.CONFIRM_PASSWORD_REQUIRED)
        .oneOf([yup.ref('password'), null], strings.CONFIRM_PASSWORD_INVALID),
    gender: yup.string()
        .required(strings.GENDER_REQUIRED)
        .matches(),
    cnic: yup.string()
        .required(strings.CNIC_REQUIRED)
        .matches(/^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$/, strings.CNIC_INVALID),
    address: yup.string()
        .required(strings.ADDRESS_REQUIRED),
    city: yup.string()
        .required(strings.CITY_REQUIRED)
        .matches(/^[a-zA-Z ]+$/, strings.CITY_INVALID),
    country: yup.string()
        .required(strings.COUNTRY_REQUIRED)
        .matches(/^[a-zA-Z ]+$/, strings.COUNTRY_INVALID),
    phoneNumber: yup.string()
        .required(strings.PHONE_NUMBER_REQUIRED)
        .matches(/^[0-9]{11}$/, strings.PHONE_NUMBER_INVALID),

    bloodGroup: yup.string()
        .required(strings.BLOOD_GROUP_REQUIRED)
        .matches(/^(A|B|AB|O)[+-]$/, strings.BLOOD_GROUP_INVALID),
    urlImg: yup.string().required(strings.IMAGE_REQUIRED),
    dob:yup.date().required(strings.DATE_REQUIRED),
});

export let editProfileValidationSchema = yup.object().shape({
    firstName: yup.string()
        .required(strings.FIRST_NAME_REQUIRED)
        .matches(/^[a-zA-Z]+$/, strings.FIRST_NAME_INVALID),
    lastName: yup.string()
        .required(strings.LAST_NAME_REQUIRED)
        .matches(/^[a-zA-Z]+$/, strings.LAST_NAME_INVALID),
    email: yup.string()
        .email(strings.EMAIL_INVALID)
        .required(strings.EMAIL_REQUIRED),
    password: yup.string()
        .min(8, ({ min }) => `Password must be at least ${min} characters long`)
        .required(strings.PASSWORD_REQUIRED)
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, strings.PASSWORD_INVALID),
    confirmPassword: yup.string()
        .required(strings.CONFIRM_PASSWORD_REQUIRED)
        .oneOf([yup.ref('password'), null], strings.CONFIRM_PASSWORD_INVALID),
    gender: yup.string()
        .required(strings.GENDER_REQUIRED)
        .matches(),
    cnic: yup.string()
        .required(strings.CNIC_REQUIRED)
        .matches(/^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$/, strings.CNIC_INVALID),
    address: yup.string()
        .required(strings.ADDRESS_REQUIRED),
    city: yup.string()
        .required(strings.CITY_REQUIRED)
        .matches(/^[a-zA-Z ]+$/, strings.CITY_INVALID),
    country: yup.string()
        .required(strings.COUNTRY_REQUIRED)
        .matches(/^[a-zA-Z ]+$/, strings.COUNTRY_INVALID),
    phoneNumber: yup.string()
        .required(strings.PHONE_NUMBER_REQUIRED)
        .matches(/^[0-9]{11}$/, strings.PHONE_NUMBER_INVALID),
    bloodGroup: yup.string()
        .required(strings.BLOOD_GROUP_REQUIRED)
        .matches(/^(A|B|AB|O)[+-]$/, strings.BLOOD_GROUP_INVALID),
    urlImg: yup.string().required(strings.IMAGE_REQUIRED),
});

export let resetPasswordValidationSchema = yup.object().shape({

    oldPassword: yup.string()
        .min(8, ({ min }) => `Password must be at least ${min} characters long`)
        .required(strings.PASSWORD_REQUIRED)
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, strings.PASSWORD_INVALID),
    newPassword: yup.string()
        .min(8, ({ min }) => `Password must be at least ${min} characters long`)
        .required(strings.PASSWORD_REQUIRED)
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, strings.PASSWORD_INVALID),
});

export let resetEmailValidationSchema = yup.object().shape({
    email: yup.string()
        .email(strings.EMAIL_INVALID)
        .required(strings.EMAIL_REQUIRED),
    password: yup.string()
        .min(8, ({ min }) => `Password must be at least ${min} characters long`)
        .required(strings.PASSWORD_REQUIRED)
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, strings.PASSWORD_INVALID),
});

