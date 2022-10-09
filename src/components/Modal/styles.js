import {StyleSheet} from 'react-native';
import {ScreenWidth} from 'react-native-elements/dist/helpers';
import globalStyles from 'src/config/globalStyles';
import {
  fontRef,
  fullHeight,
  fullWidth,
  heightRef,
  widthRef,
} from 'src/config/screenSize';

const styles = StyleSheet.create({
   content2: {
        backgroundColor:globalStyles.Theme.backgroundColor,
        justifyContent: 'space-around',
        padding: 13*heightRef,
        borderRadius:10,
        width:350*heightRef,
        height: 210*heightRef,

alignSelf:'center',
alignItems:'center'
      },
      bottomView:{
        flex:1,
      },title:{
        fontSize: 18 * fontRef,
        color: globalStyles.Theme.black,
       
        textAlign:'center',
    
      
        
      },image:{
        width: 90* heightRef,
        height: 90* heightRef,
        alignSelf: 'center',
      
        // position: 'absolute',
      }
});
export default styles;
