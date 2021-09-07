import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, Modal, ActivityIndicator, ScrollView ,Button} from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import Loader from '../../Components/Loader'
import navigationStrings from '../../constants/navigationStrings';
const Home = ({navigation,route}) => {
    const [pickUp, setPickUp] = useState({})
    const [destination, setDestination] = useState({})
    console.log(route.params)
    const {getCordinates} = route.params
    
    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1 }}>
                {/* <ScrollView> */}
                {/* <ScrollView
                keyboardShouldPersistTaps='handled'
                // listMode="SCROLLVIEW"
                nestedScrollEnabled={true}
                > */}
                {/* <GooglePlacesAutocomplete
                    placeholder='Enter pickup location'
                    listMode="SCROLLVIEW"
                    placeholderTextColor='#000'
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        // console.log(data, details);
                        console.log(details.geometry.location.lat);
                        console.log(details.geometry.location.lng);
                        setPickUp({
                            latitude: details.geometry.location.lat,
                            longitude: details.geometry.location.lng,
                        })
                    }}
                    enablePoweredByContainer={false}
                    fetchDetails={true}
                    query={{
                        key: 'AIzaSyAw2vw12DMXEmTy-sCStmEMnJ8MAvKdnKU',
                        language: 'en',
                    }}
                    styles={{
                        textInputContainer: {
                        },
                        textInput: {
                            height: 38,
                            color: 'black',
                            // backgroundColor: 'yellow',
                            fontSize: 16,
                        }
                    }}
                /> */}
                <GooglePlacesAutocomplete
                    placeholder='Enter destination'
                    listMode="SCROLLVIEW"
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        // console.log(data, details);
                        console.log(details.geometry.location.lat);
                        console.log(details.geometry.location.lng);
                        getCordinates({
                            latitude: details.geometry.location.lat,
                            longitude: details.geometry.location.lng,
                        })
                    }}
                    enablePoweredByContainer={false}
                    fetchDetails={true}
                    query={{
                        key: 'AIzaSyAw2vw12DMXEmTy-sCStmEMnJ8MAvKdnKU',
                        language: 'en',
                    }}
                    styles={{
                        textInputContainer: {
                        },
                        textInput: {
                            height: 38,
                            color: 'black',
                            // backgroundColor: 'yellow',
                            fontSize: 16,
                        }
                    }}
                />

                <Button title="Go" onPress={() => { 
                        navigation.navigate(navigationStrings.MAP, {
                            pickUp,
                            destination
                        })
                }} />
                {/* </ScrollView> */}
                {/* </ScrollView> */}
                {/* <Loader /> */}
            </SafeAreaView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})
