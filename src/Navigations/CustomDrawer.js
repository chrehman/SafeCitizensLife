import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'
import LinearGradient from 'react-native-linear-gradient'
import colors from '../styles/colors'
import imagePath from '../constants/imagePath'
import { scale, verticalScale } from '../styles/responsiveSize'
import fontFamily from '../styles/fontFamily'


import DrawerRow from '../Components/DrawerRow'
import strings from '../constants/lng'
import navigationStrings from '../constants/navigationStrings'

const CustomDrawer = (props) => {

    const [showSupport, setShowSupport] = useState(false)

    const handleSupport = () => {
        setShowSupport(!showSupport)
    }
    return (
        <View style={{ flex: 1, }}>
            <DrawerContentScrollView {...props}>
                <LinearGradient
                    start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                    locations={[0, 0.5355, 1]}
                    colors={[colors.linearGradient1, colors.linearGradient2, colors.green]} style={styles.linearGradient}>
                    <View>
                        <Image source={imagePath.userIcon} style={styles.image} />
                    </View>
                    <View style={styles.headerTextContainer}>
                        <View style={styles.nameContainer}>
                            <Text style={styles.name}>Abdullah Jan Khan Jan Khan</Text>
                        </View>
                        <Text style={styles.name}>Rating 4.90</Text>
                    </View>
                </LinearGradient>
                <View style={styles.listContainer}>
                    <View>
                        <DrawerRow
                            text={strings.HISTORY}
                            onPress={() =>{ 
                                handleSupport()
                                props.navigation.navigate('History')}}
                            imagePath={imagePath.historyIcon}
                        />
                        <DrawerRow
                            text={strings.PROFILE}
                            onPress={() => {
                                handleSupport()
                                props.navigation.navigate(navigationStrings.PROFILE_DRAWER)}}
                            imagePath={imagePath.profileIcon}
                        />
                        <DrawerRow
                            text={strings.EDIT_EMAIL}
                            onPress={() => {
                                handleSupport()
                                props.navigation.navigate(navigationStrings.RESET_EMAIL)}}
                            imagePath={imagePath.editEmailIcon}
                        />
                        <DrawerRow
                            text={strings.EDIT_PASSWORD}
                            onPress={() => {
                                handleSupport()
                                props.navigation.navigate(navigationStrings.RESET_PASSWORD)}}
                            imagePath={imagePath.editPasswordIcon}
                        />
                        <DrawerRow
                            text={strings.FEEDBACK_AND_SUPPORT}
                            onPress={() => setShowSupport(!showSupport)}
                            imagePath={imagePath.settingsIcon}
                        />
                        {showSupport && (
                            <>
                            <DrawerRow 
                                rowStyle={styles.rowStyle}
                                imageStyle={styles.imageStyle}
                                textStyle={styles.textStyle}
                                text={strings.FAQS}
                                onPress={() => props.navigation.navigate('History')}
                                imagePath={imagePath.helpIcon}
                            />
                            <DrawerRow 
                                rowStyle={styles.rowStyle}
                                imageStyle={styles.imageStyle}
                                textStyle={styles.textStyle}
                                text={strings.REPORT_A_BUG}
                                onPress={() => props.navigation.navigate('History')}
                                imagePath={imagePath.helpIcon}
                            />
                            <DrawerRow 
                                rowStyle={styles.rowStyle}
                                imageStyle={styles.imageStyle}
                                textStyle={styles.textStyle}
                                text={strings.ABOUT_US}
                                onPress={() => props.navigation.navigate('History')}
                                imagePath={imagePath.helpIcon}
                            />
                            <DrawerRow 
                                rowStyle={styles.rowStyle}
                                imageStyle={styles.imageStyle}
                                textStyle={styles.textStyle}
                                text={strings.RATE_APP}
                                onPress={() => props.navigation.navigate('History')}
                                imagePath={imagePath.helpIcon}
                            />
                            <DrawerRow 
                                rowStyle={styles.rowStyle}
                                imageStyle={styles.imageStyle}
                                textStyle={styles.textStyle}
                                text={strings.SHARE_APP}
                                onPress={() => props.navigation.navigate('History')}
                                imagePath={imagePath.helpIcon}
                            />
                            <DrawerRow 
                                rowStyle={styles.rowStyle}
                                imageStyle={styles.imageStyle}
                                textStyle={styles.textStyle}
                                text={strings.PRIVACY_POLICY}
                                onPress={() => props.navigation.navigate('History')}
                                imagePath={imagePath.helpIcon}
                            />
                            <DrawerRow 
                                rowStyle={styles.rowStyle}
                                imageStyle={styles.imageStyle}
                                textStyle={styles.textStyle}
                                text={strings.TERMS_OF_SERVICE}
                                onPress={() => props.navigation.navigate('History')}
                                imagePath={imagePath.helpIcon}
                            />
                            </>
                        )}
                        <DrawerRow
                            text={strings.LEARN_TRAFFIC_RULES}
                            onPress={() => props.navigation.navigate('History')}
                            imagePath={imagePath.learnIcon}
                        />
                    </View>
                    <View style={{marginTop:showSupport?scale(220-(25*7)):scale(240)}}>
                        <DrawerRow
                            text={strings.LOGOUT}
                            onPress={() => props.navigation.navigate('History')}
                            imagePath={imagePath.logoutIcon}
                        />
                    </View>
                </View>
            </DrawerContentScrollView>
        </View>
    )
}

export default CustomDrawer

const styles = StyleSheet.create({
    linearGradient: {
        paddingVertical: scale(17),
        paddingHorizontal: scale(12),
        marginTop: verticalScale(-30),
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        borderTopRightRadius: scale(30),
        shadowOpacity: 0.5,
        shadowColor: colors.black,
        shadowRadius: scale(5),
        shadowOffset: {
            height: scale(7),
            width: scale(0)
        },
        // borderWidth:scale(1),
        elevation: scale(5),
        // width:'100%',
        // justifyContent:'center',

    },
    headerTextContainer: {
        marginLeft: scale(5),
        flex: 1,
    },
    nameContainer: {
        width: '100%'
    },
    name: {
        // flex:1,
        flexWrap: 'wrap',
        textTransform: 'uppercase',
        color: colors.white,
        fontFamily: fontFamily.bold

    },
    listContainer: {
        paddingVertical: scale(20),
        flex: 1,
        justifyContent: 'space-between',
    },
    image: {
        width: scale(60),
        height: scale(60)
    },
    rowStyle:{
        paddingLeft:scale(40),
        paddingVertical:scale(5),
    },
    textStyle:{
        fontSize:scale(10),
    },
    imageStyle:{
        width:scale(20),
        height:scale(20),
    }

    // footerContainer: { marginTop: showSupport? scale(200) }

})
