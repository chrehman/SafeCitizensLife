import React from 'react'
import { ActivityIndicator, Modal, StyleSheet, Text, View } from 'react-native'
import colors from '../styles/colors'
import fontFamily from '../styles/fontFamily'

const Loader = ({
    isLoading = false,
    text=null
}) => {
    console.log(isLoading)
    if (isLoading) {
        return (
            <Modal transparent>
                <View style={styles.container}>
                    <ActivityIndicator size="large" color={colors.green} />
                    <Text style={{color:'white',fontFamily:fontFamily.medium}}>{text}</Text>
                </View>
            </Modal>
        )
    }
    else{
        return null
    }
}

export default Loader

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.8)'
    }
})
