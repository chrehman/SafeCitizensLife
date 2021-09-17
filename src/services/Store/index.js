import firestore from '@react-native-firebase/firestore'

export const applyCitizen = (data) => {

    return firestore()
        .collection('applyCitizens')
        .add(data)
        
}

export const getCitizenInfo = (userId) => {

    return firestore()
        .collection('citizens')
        .doc(userId)
        .get()
        
}

export const getCitizenEmail = (email) => {
    return firestore()
        .collection('applyCitizens')
        .where('email', '==', email)
        .get()
        
}


export const getCitizenCnic = (cnic) => {
    return firestore()
        .collection('applyCitizens')
        .where('cnic', '==', cnic)
        .get()
        
}

export const setCitizenLocation = (userId,data) => {
    return firestore()
        .collection('citizenLocations')
        .doc(userId)
        .set(data)
}

export const setCarLocation = (userId,data) => {
    return firestore()
        .collection('cars')
        .doc(userId)
        .set(data)
}

export const createToken= (userId,data) => {
    return firestore()
        .collection('citizens')
        .doc(userId)
        .update(data)
        
}


export const addChatMessage=(citizenId,responderId,text)=>{
    return firestore()
        .collection('rooms')
        // .doc(`${citizenId}-${responderId}`)
        .doc('20hus6vN6sGqN3psDUPp')
        .collection('messages')
        .add({
            uid:'456',
            text,
            timestamp: firestore.FieldValue.serverTimestamp(),
        })
}


export const getChatMessages=(citizenId,responderId)=>{
    return firestore()
        .collection('rooms')
        .doc('20hus6vN6sGqN3psDUPp')
        .collection('messages')
        .orderBy('timestamp','desc')
}

