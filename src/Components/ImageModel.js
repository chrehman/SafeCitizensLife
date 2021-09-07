import React from 'react'
import { Pressable, StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native'
import { scale } from 'react-native-size-matters';
import colors from '../styles/colors';
import LinearGradient from 'react-native-linear-gradient';
import commonStyles from '../styles/commonStyles';
import fontFamily from '../styles/fontFamily';
import { openCamera } from 'react-native-image-crop-picker';



const Lineargradient = (
    { onPress,
        text,
        ...props
    }) => (
    <LinearGradient
        start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
        colors={[colors.linearGradient1, colors.green]}
        style={{ ...styles.button }} >
        <TouchableOpacity
            onPress={onPress}
            {...props}
        >
            <Text style={{ ...styles.textStyle }}>{text}</Text>
        </TouchableOpacity>
    </LinearGradient>
)
const ImageModel = ({
    imgUrl,
    openGallery,
    closeModel,
    ...props
}) => {
    return (
        <Modal transparent animationType="slide">
            <View style={styles.container}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Choose Upload Method</Text>
                    <Lineargradient onPress={openCamera} text="Open Camera" {...props} />
                    <Lineargradient onPress={openGallery} text="Open Gallery" {...props} />
                    <Lineargradient onPress={closeModel} text="Close" {...props} />
                </View>
            </View>
        </Modal>
    )
}

export default ImageModel

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    modalView: {
        // margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: scale(35),
        // alignItems: "center",
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 2
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 4,
        // elevation: 5
    },
    button: {
        borderRadius: scale(20),
        padding: scale(10),
        elevation: scale(2),
        marginVertical: scale(10)
    },
    buttonClose: {
        backgroundColor: colors.green,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        ...commonStyles.fontSize14,
        fontFamily: fontFamily.bold,
        marginBottom: scale(15),
        textAlign: "center",
        color: colors.green,

    }
})
