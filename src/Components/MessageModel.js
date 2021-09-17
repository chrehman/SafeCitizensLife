import React, { useEffect, useRef, useState } from 'react'
import { StatusBar, FlatList, StyleSheet, Text, View, Modal, TouchableOpacity, Image } from 'react-native'
import { scale } from 'react-native-size-matters';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import fontFamily from '../styles/fontFamily';
import { verticalScale } from '../styles/responsiveSize';
import imagePath from '../constants/imagePath';
import { Input } from 'react-native-elements';
import { getChatMessages } from '../services/Store';
import { showError, showSuccess } from '../helper/helperFunctions';
import { addChatMessage } from './../services/Store/index';
import { sendAlert } from '../services/CloudMessaging';
import { useSelector } from 'react-redux';



const MessageModel = ({
    imgUrl,
    setOpenMessageModel,
    openMessageModel,
    ...props
}) => {
    const [text, setText] = useState('')
    const [selectedId, setSelectedId] = useState(null);
    const [messages, setMessages] = useState([]);

    const userId = useSelector((state) => {
        console.log(state.login.data.userId)


        return state.login.data.userId
        // return "sadads"
    })

    useEffect(() => {
        getChatMessages("sads", "dsadsd")
            .onSnapshot((snapshot) => {
                // console.log(snapshot)
                setMessages(snapshot.docs.map(doc => doc.data()))
            })

        return () => {
            console.log("unmount")
            setMessages([])
        }
    }, [])

    // useEffect(() => {
    //     flatListRef.current.scrollToEnd({animated: true})
    // }, [messages])

    console.log("MESSSAGESSSS", messages.length)
    const renderMessage = ({ item }) => {
        // console.log("item")
        const backgroundColor = 'rgba(156, 255, 172,0.25)';
        const color = colors.green;
        // const calculateWidth=(item.title.length*11)
        return (
            <View style={{ alignSelf: item.uid === "123" ? 'flex-start' : 'flex-end' }}>
                <View style={{ ...styles.item, backgroundColor, alignSelf: 'flex-start' }}>
                    <Text style={{ ...styles.title, color }}>{item.text}</Text>
                </View>
            </View>
        );
    }

    const FlatListMessage=React.memo(({messages})=>{
        useEffect(() => {
            console.log("FLatLISt")
        })
        return(
            
            <FlatList

            data={messages}
            renderItem={renderMessage}
            keyExtractor={(message, index) => index}
            inverted

        />
        )})

    const sendMessage = () => {
        if (text.trim() === '') {
            showError(
                'Please enter message',
            )
        }
        else {
            console.log("text", text.trim())
            addChatMessage("sads", "dsadsd", text.trim())
                .then(() => {
                    showSuccess("Message Send")
                    sendAlert(userId,{
                        title: "New Message",
                        text: text.trim(),
                    })
                    .then(() => {
                        console.log("alert sent")
                    })
                    .catch((err) => {
                        console.log("alert not sent")
                        console.log(err)
                    })
                    setText('')
                })
                .catch(() => {
                    showError("Message not send")
                })
            setText('')
        }

    }
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
                                fontSize: scale(10),
                                fontFamily: fontFamily.bold,
                                color: colors.green,
                                textTransform: 'uppercase',
                            }}
                        >Abdul Rahman - Assigned Responder    </Text>
                    </View>
                            <FlatListMessage messages={messages}/>

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
                            onPress={() => sendMessage()}
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
        marginVertical: scale(5),
        marginHorizontal: scale(10),
    },
    title: {
        fontSize: scale(12),
        fontFamily: fontFamily.bold,
    },
})
