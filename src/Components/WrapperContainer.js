import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import colors from '../styles/colors';
import { moderateScale } from '../styles/responsiveSize';
import Loader from './Loader';


// create a component
const WrapperContainer = ({
    barStyle = "light-content",
    statusBarColor = "transparent",
    children,
    isLoading=false,
    style = {},
}) => {
    return (
        <View style={{...styles.container, ...style}}>
            <StatusBar backgroundColor={statusBarColor} translucent={true} barStyle={barStyle} />
            <SafeAreaView style={{flex:1}}>
                {children}
            </SafeAreaView>
             <Loader isLoading={isLoading} />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        // padding: moderateScale(24)
    },
});
export default WrapperContainer;