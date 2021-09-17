import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import MapboxNavigation from '@homee/react-native-mapbox-navigation';

const MapBox = () => {
    return (
        <View style={styles.container}>
            <MapboxNavigation
                origin={[33.6520533, 73.0813509]}
                destination={[33.6472083, 73.0627559]}
                shouldSimulateRoute={true}
                showsEndOfRouteFeedback={true}
                onLocationChange={(event) => {
                    const { latitude, longitude } = event.nativeEvent;
                    console.log(event.nativeEvent);
                    console.log(`Current location: ${latitude   }, ${longitude}`);
                }}
                onRouteProgressChange={(event) => {
                    const {
                        distanceTraveled,
                        durationRemaining,
                        fractionTraveled,
                        distanceRemaining,
                    } = event.nativeEvent;
                    console.log(event.nativeEvent);
                    console.log(distanceTraveled);
                    console.log(durationRemaining);
                    console.log(fractionTraveled);
                    console.log(distanceRemaining);
                }}
                onError={(event) => {
                    const { message } = event.nativeEvent;
                    console.log(message);
                }}
                onCancelNavigation={() => {
                    // User tapped the "X" cancel button in the nav UI
                    // or canceled via the OS system tray on android.
                    // Do whatever you need to here.
                }}
                onArrive={() => {
                    // Called when you arrive at the destination.
                }}
            />
        </View>
    );
};

export default MapBox;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red'
    },
})