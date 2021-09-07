import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import { scale } from '../../styles/responsiveSize';

const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
        backgroundColor: '#fff'
    },
    

    inputContainerStyle: {
        padding: scale(0),
        borderBottomColor: colors.green,
        borderBottomWidth: 2,
        width: '100%',
    },
    
})
export default styles;