import React, { useState, useRef, useEffect } from 'react'
import { Dimensions, StyleSheet, Text, View, Image, TouchableOpacity, Platform } from 'react-native'
import MapView, { Marker, AnimatedRegion, Callout } from 'react-native-maps';
import imagePath from '../../constants/imagePath';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../styles/colors';
import { scale, verticalScale } from '../../styles/responsiveSize';
import strings from '../../constants/lng';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import styles from './style'
import MessageModel from '../../Components/MessageModel';
import MapViewDirections from 'react-native-maps-directions';
import { getCurrentLocation, locationPermission } from '../../helper/helperFunctions';
import navigationStrings from '../../constants/navigationStrings';
import { setCarLocation, setCitizenLocation } from '../../services/Store';
import { showNotification } from './../../utils/PushNotifications/index';

const Map = ({ navigation, route }) => {

    const screen = Dimensions.get('window');
    const ASPECT_RATIO = screen.width / screen.height;
    const LATITUDE_DELTA = 0.04;
    const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

    const [openMessageModel, setOpenMessageModel] = useState(false)
    // const origin = route.params.pickUp;

    const [origin, setOrigin] = useState({
        latitude: 33.6472083,
        longitude: 73.0627559
    });
    const [destination, setDestination] = useState({
        latitude: 33.6472083,
        longitude: 73.0627559,
    });
    const [coordinate, setCoordinate] = useState(new AnimatedRegion({
        latitude: 33.6472083,
        longitude: 73.0627559,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
    }));


    const [distance, setDistance] = useState(null)
    const [time, setTime] = useState(null)
    const [heading, setHeading] = useState(90)
    const mapView = useRef()
    const makerRef = useRef()

    useEffect(() => {
        console.log("useEffect")
        return getLiveLocation()
    }, [])

    

    const getLiveLocation = async () => {
        const locPermissionDenied = await locationPermission()
        // console.log("Permissions",locPermissionDenied)
        if (locPermissionDenied) {
            const { latitude, longitude, heading } = await getCurrentLocation()
            console.log(latitude, longitude)
            // console.log("get live location after 4 second")
            // animate(latitude, longitude);
            animate(latitude, longitude);
            if (latitude.toFixed(3) !== origin.latitude.toFixed(3) || longitude.toFixed(2) !== origin.longitude.toFixed(2)) {
                // setCitizenLocation("123", { latitude, longitude }).then(() => {
                //     console.log("setCitizenLocation added")
                // })
                //     .catch(err => {
                //         console.log("setCitizenLocation error", err)
                //     })
                setOrigin({
                    latitude,
                    longitude
                })
                setCoordinate(new AnimatedRegion({
                    latitude,
                    longitude,
                    latitudeDelta: LATITUDE_DELTA,
                    longitudeDelta: LONGITUDE_DELTA
                }))
                setHeading(heading)
            }
        }
    }
    const onPressLocation = () => {
        navigation.navigate(navigationStrings.HOME, { getCordinates: fetchValue })
    }
    const fetchValue = (data) => {
        console.log("this is data", data)
        setDestination({
            latitude: data.latitude,
            longitude: data.longitude,
        })
    }

    useEffect(() => {
        const interval = setInterval(() => {
            getLiveLocation()
        }, 4000);
        return () => clearInterval(interval)
    })

    const onCenter = () => {
        mapView.current.animateToRegion({
            latitude: origin.latitude,
            longitude: origin.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
        })
    }

    const animate = (latitude, longitude) => {
        const newCoordinate = { latitude, longitude };
        if (Platform.OS == 'android') {
            if (makerRef.current) {
                makerRef.current.animateMarkerToCoordinate(newCoordinate, 2000);
            }
        } else {
            coordinate.timing(newCoordinate).start();
        }
    }

    return (
        <View style={{ flex: 1, justifyContent: 'space-between' }}>
            <MapView
                style={StyleSheet.absoluteFillObject}
                // showsUserLocation={true} // enable this if you want to show user location on map
                ref={mapView}
                onUserLocationChange={(location) => {
                    const { latitude, longitude, heading } = location.nativeEvent.coordinate
                    // console.log("long", longitude)
                    // console.log("heading", heading)
                    // console.log("latitude", latitude)
                    // animate(latitude, longitude);
                    animate(latitude, longitude);
                    if (latitude.toFixed(3) !== origin.latitude.toFixed(3) || longitude.toFixed(2) !== origin.longitude.toFixed(2)) {
                        setCarLocation("123", { latitude, longitude, heading, isActivated: true, type: "Ambulance" })
                            .then(() => {
                                console.log("cars added")
                            })
                            .catch(err => {
                                console.log("cars", err)
                            })
                        setOrigin({
                            latitude,
                            longitude
                        })
                        setCoordinate(new AnimatedRegion({
                            latitude,
                            longitude,
                            latitudeDelta: LATITUDE_DELTA,
                            longitudeDelta: LONGITUDE_DELTA
                        }))
                        setHeading(heading)
                    }
                    // console.log("origin", origin)
                }
                }
                initialRegion={{
                    ...origin,
                    latitudeDelta: LATITUDE_DELTA,
                    longitudeDelta: LONGITUDE_DELTA,
                }}
            >
                <Marker.Animated
                    ref={makerRef}
                    coordinate={origin}
                >

                    <Image
                        {...origin}
                        style={{
                            width: 50,
                            height: 50,
                            resizeMode: 'contain',
                            transform: [{ rotate: `${heading}deg` }],
                        }}
                        source={imagePath.ambulanceTrackIcon} />

                </Marker.Animated>
                {Object.keys(destination).length > 0 && (<Marker
                    coordinate={destination}
                />)}
                {Object.keys(destination).length > 0 && (
                    <MapViewDirections
                        origin={origin}
                        destination={{ latitude: destination?.latitude, longitude: destination?.longitude }}
                        strokeWidth={6}
                        strokeColor={colors.red}
                        optimizeWaypoints={true}
                        onReady={result => {
                            // console.log("onReady", result)
                            // console.log("onReady", result.waypoints)
                            console.log(`Distance: ${result.distance} km`)
                            console.log(`Duration: ${result.duration} min.`)
                            setDistance(result.distance)
                            setTime(result.duration)

                            mapView.current.fitToCoordinates(result.coordinates, {
                                edgePadding: {
                                    right: scale(200),
                                    bottom: scale(100),
                                    left: scale(200),
                                    top: scale(100),
                                }
                            });
                        }}
                        apikey={"AIzaSyAw2vw12DMXEmTy-sCStmEMnJ8MAvKdnKU"}
                    />
                )}
            </MapView>
            <LinearGradient
                colors={[colors.green, colors.linearGradient1]}
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                style={styles.linearGradient}
            >
                <View style={styles.imageContainer}>
                    <Avatar rounded size={scale(70)} source={imagePath.logo1} />
                </View>
                <View style={styles.container}>
                    <Image source={imagePath.redDotIcon} style={{ width: scale(15), height: scale(15), marginRight: scale(10) }} />
                    <Text style={styles.text}>{strings.LIVE_MONITORING}</Text>
                </View>
                <TouchableOpacity
                    onPress={() => navigation.toggleDrawer()}
                >
                    <Image source={imagePath.hamburgerIcon} style={{ width: scale(25), height: scale(25) }} />
                </TouchableOpacity>
            </LinearGradient>

            {/* CHAT */}
            <TouchableOpacity
                onPress={() => { setOpenMessageModel(!openMessageModel) }}
                style={styles.messageContainer}>
                <Image source={imagePath.messageGreenIcon} style={styles.messageIcon} />
            </TouchableOpacity>
            {openMessageModel && (
                <MessageModel
                    setOpenMessageModel={setOpenMessageModel}
                    openMessageModel={openMessageModel}

                />
            )}
            {/* Footer */}
            <View>

                {(distance && time) ? (
                    <View style={{ ...styles.carContainer, marginLeft: scale(20), marginRight: scale(90), paddingVertical: scale(5) }}>
                        <Image source={imagePath.timerIcon} style={styles.carImage} />
                        <Text style={{ ...styles.carText, fontSize: scale(14) }}>{time.toFixed(0)} Min</Text>
                        <Image source={imagePath.distanceIcon} style={{ ...styles.carImage, marginLeft: scale(30) }} />
                        <Text style={{ ...styles.carText, fontSize: scale(14) }}>{distance} km</Text>
                    </View>

                ) :
                    <View style={styles.slideContainer}>

                        <View style={styles.carContainer}>
                            <Image source={imagePath.ambulanceIcon} style={styles.carImage} />
                            <Text style={styles.carText}>{strings.AMBULANCE}</Text>
                        </View>
                        <View style={styles.carContainer}>
                            <Image source={imagePath.fireBrigadeIcon} style={styles.carImage} />
                            <Text style={styles.carText}>{strings.FIRE_BRIGADE}</Text>
                        </View>
                        <View style={styles.carContainer}>
                            <Image source={imagePath.policeIcon} style={styles.carImage} />
                            <Text style={styles.carText}>{strings.POLICE}</Text>
                        </View>
                    </View>
                }

                <View style={styles.footerContainer}>
                    <LinearGradient
                        start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                        colors={[colors.green, colors.linearGradient1]}
                        style={{ ...styles.button, paddingHorizontal: scale(40) }} >
                        <TouchableOpacity
                            onPress={() => { showNotification("fcm_fallback_notification_channel","Safe Citizens Life ","Hello World") }}
                        >
                            <Text style={{ ...styles.textStyle }}>{strings.REQUEST_A_VHHECILE}</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                    <LinearGradient
                        start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                        colors={[colors.green, colors.linearGradient1]}
                        style={{ ...styles.button, borderRadius: scale(30) }} >
                        <TouchableOpacity
                            onPress={() => { onCenter() }}
                        >
                            <Image source={imagePath.gpsIcon} style={{ width: scale(30), height: scale(30) }} />
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            </View>
        </View>
    )
}

export default Map

