import firestore from '@react-native-firebase/firestore'

export const applyCitizen = (data) => {

    return firestore()
        .collection('applyCitizens')
        .add(data)
        
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

