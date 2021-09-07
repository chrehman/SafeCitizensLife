import React from 'react'
import { StyleSheet, Text, View, Modal} from 'react-native'
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import fontFamily from '../styles/fontFamily';
import { scale } from '../styles/responsiveSize';
import LinearGradientContainer from './LinearGradientContainer';

const ImageLoader = ({
    openCamera,
    openGallery,
    closeModel,
    ...props
}) => {
    return (
        <Modal transparent animationType="slide">
            <View style={styles.container}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Choose Upload Method</Text>
                    <LinearGradientContainer onPress={openCamera} text="Open Camera" {...props} />
                    <LinearGradientContainer onPress={openGallery} text="Open Gallery" {...props} />
                    <LinearGradientContainer onPress={closeModel} text="Close" {...props} />
                </View>
            </View>
        </Modal>
    )
}

export default ImageLoader

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
    modalText: {
        ...commonStyles.fontSize14,
        fontFamily: fontFamily.bold,
        marginBottom: scale(15),
        textAlign: "center",
        color: colors.green,

    }
})
