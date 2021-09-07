import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import { scale, verticalScale } from '../../styles/responsiveSize';

const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
        backgroundColor: '#fff'
    },
    headerStyle:{
        textAlign:'center',
        paddingHorizontal:scale(80),
        ...commonStyles.fontSize25,
        fontFamily:fontFamily.bold
    },
    dearUser:{
        fontFamily:fontFamily.bold,
        color:colors.darkGreen,   
    },
    notify:{
        fontFamily:fontFamily.bold,
        color:colors.darkGreen,
        paddingTop:verticalScale(15),
        alignSelf:'flex-start',
    },
    btnStyle:{
        marginTop:verticalScale(70)
    }

    
})
export default styles;