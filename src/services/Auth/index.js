import auth from '@react-native-firebase/auth';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/Slices/Login/loginSlice';

const dispatch = useDispatch();
export const signin = async (email, password) => {
    return auth().signInWithEmailAndPassword(email, password)

}


