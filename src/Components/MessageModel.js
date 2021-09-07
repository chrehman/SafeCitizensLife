import React, { useState } from 'react'
import { StatusBar, FlatList, StyleSheet, Text, View, Modal, TouchableOpacity, Image } from 'react-native'
import { scale } from 'react-native-size-matters';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import fontFamily from '../styles/fontFamily';
import { verticalScale } from '../styles/responsiveSize';
import imagePath from '../constants/imagePath';
import { Input } from 'react-native-elements';



const MessageModel = ({
    imgUrl,
    setOpenMessageModel,
    openMessageModel,
    ...props
}) => {
    const [text, setText] = useState('')
    const [selectedId, setSelectedId] = useState(null);
    const DATA = [
        {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
            title: "First Item item sasa assad sdsad sadsadsa sadsadsad sadsadsa assas asss ddasdsa sadsad",
        },
        {
            id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
            title: "Second Item",
        },
        {
            id: "58694a0f-3da1-471f-bd96-145571e29d72",
            title: "Third Item",
        },
        {
            id: "3ac6ww8afc-c605-48d3-a4f8-fbd91aa97f63",
            title: "Second Item",
        },
        {
            id: "58694awwqq0f-3da1-471f-bd96-145571e29d72",
            title: "Third Item",
        },
        {
            id: "58694a0saddadaf-3da1-471f-bd96-145571e29d72",
            title: "Third Item",
        },
        {
            id: "3ac6ww8aafc-c605-48d3-a4f8-fbd91aa97f63",
            title: "Second Item",
        },
        {
            id: "58694awwq22q0f-3da1-471f-bd96-145571e29d72",
            title: "Third dsfdsfItem",
        },
    ];
    const renderItem = ({ item }) => {
        const backgroundColor = 'rgba(156, 255, 172,0.25)';
                const color = colors.green;
                const calculateWidth=(item.title.length*11)
        return (
            <View style={{alignSelf:'flex-end'}}>
                <View style={{ ...styles.item, backgroundColor,alignSelf:'flex-start'}}>
                    <Text style={{ ...styles.title, color }}>{item.title}</Text>
                </View>
            </View>
        );
    };
    return (
        <Modal transparent animationType="fade">
            <View style={styles.container}>
                <View style={styles.modalView}>
                    <View
                        style={{
                            backgroundColor: colors.white,
                            borderRadius: scale(20),
                            borderWidth: 1,
                            borderColor: colors.green,
                            padding: scale(5),
                            marginLeft: scale(10),
                            width: scale(250),
                            shadowColor: colors.black,
                            shadowOffset: {
                                width: 0,
                                height: 2
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 4,
                            elevation: 4
                        }}
                    >
                        <Text
                            style={{
                                ...commonStyles.fontSize12,
                                fontFamily: fontFamily.bold,
                                color: colors.green,
                                textTransform: 'uppercase',
                            }}
                        >Abdul Hadi - Assigned User    </Text>
                    </View>

                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        initialScrollIndex={DATA.length - 1}
                    />

                    <View
                        style={{
                            backgroundColor: colors.white,
                            borderRadius: scale(20),
                            borderWidth: 1,
                            borderColor: colors.green,
                            padding: scale(5),
                            marginHorizontal: scale(5),
                            shadowColor: colors.black,
                            shadowOffset: {
                                width: 0,
                                height: 2
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 4,
                            elevation: 4,
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}
                    >
                        <View style={{
                            width: scale(240),
                            height: verticalScale(15),
                            alignItems: 'center',
                            justifyContent: 'center',
                            // backgroundColor:'red'
                        }}>
                            <Input
                                placeholder="TYPE A MESSAGE"
                                placeholderTextColor={colors.forgetColor}
                                onChangeText={setText}
                                value={text}
                                style={{
                                    fontSize: scale(12),
                                    fontFamily: fontFamily.bold,
                                }}
                                inputContainerStyle={{
                                    borderBottomWidth: 0,
                                    borderTopWidth: 0,
                                    margin: 0,
                                    padding: 0,
                                    // backgroundColor: 'green',
                                    height: 20,
                                    color: colors.white,
                                    fontSize: scale(8),


                                }}
                                containerStyle={{
                                    borderBottomWidth: 0,
                                    borderTopWidth: 0,
                                    padding: 0,
                                    margin: 0,
                                    // width:200,
                                    height: 20,
                                    // backgroundColor:'red',
                                    // alignItems:'center'
                                }}
                            />
                        </View>
                        <TouchableOpacity
                            onPress={() => setText('')}
                        >
                            <Image source={imagePath.sendIcon} style={{ width: scale(20), height: scale(20), marginLeft: scale(10) }} />
                        </TouchableOpacity>
                    </View>
                </View>




                <TouchableOpacity
                    onPress={() => { setOpenMessageModel(!openMessageModel) }}
                    style={styles.messageContainer}>
                    <Image source={imagePath.messageGreenIcon} style={styles.messageIcon} />
                </TouchableOpacity>
            </View>
        </Modal>
    )
}

export default MessageModel

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.2)'
    },
    modalView: {
        // margin: 20,
        backgroundColor: colors.white,
        borderRadius: 20,
        width: scale(300),
        height: verticalScale(300),
        paddingVertical: scale(5),
        // paddingLeft: scale(10),
        justifyContent: 'space-between'

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

    },
    messageContainer: {
        position: 'absolute',
        top: verticalScale(150),
        bottom: 0,
        right: scale(10),
        backgroundColor: colors.white,
        width: scale(56),
        height: scale(56),
        borderRadius: scale(28),
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: colors.shadowColor,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: scale(5)
    },
    messageIcon: {
        width: scale(40),
        height: scale(40)
    },
    container2: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        padding: scale(10),
        marginVertical: verticalScale(6),
        marginHorizontal: scale(10),
    },
    title: {
        fontSize: scale(12),
        fontFamily: fontFamily.bold,
    },
})
