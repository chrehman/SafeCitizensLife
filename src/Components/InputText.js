import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Input } from 'react-native-elements';

const InputText = (
    placeHolder,
    onChangeText,
    onBlur,
    value,
    leftIcon,
    rightIconOne,
    rightIconTwo,
    // LeftIcon,
    // RightIconOne,
    // RightIconTwo,
    // leftIconName,
    // rightIconNameOne,
    // rightIconNameTwo,
    // rightIconOneColor = 'grey',
    // rightIconTwoColor = 'grey',
    error,
    onPress,
    touched,
    ...props
) => {
    return (
        <Input
            placeholder={placeHolder}
            onChangeText={onChangeText}
            onBlur={onBlur}
            value={value}
            leftIcon={leftIcon}
            rightIcon={
                <TouchableOpacity onPress={onPress}>
                    {error ?
                        {rightIconOne}
                        :
                        {rightIconTwo}
                    }
                </TouchableOpacity>
            }
            errorStyle={{ color: 'red' }}
            errorMessage={(touched && error) ? error : null}
            {...props}
        />
    )
}

export default InputText

const styles = StyleSheet.create({})
