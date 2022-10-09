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
        // justifyContent: 'space-around',
        padding: 13*heightRef,
        borderRadius:10,
        width:'100%',
       
        // height: 210*heightRef,

// alignSelf:'center',
// alignItems:'center'
      },
      bottomView:{
        justifyContent: 'flex-end',
        margin: 0,
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
      ,
      text: {
        fontSize: 18 * fontRef,
        // marginBottom:5*heightRef,
       fontWeight:'700%',
        color: globalStyles.Theme.black,
       
        marginHorizontal:5*widthRef,
        fontFamily:globalStyles.font.fontFamilySemiBold,
      
    //    textAlign:'center',
      
      },
      row: {
        flexDirection: 'row',
        padding: 2 * heightRef,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical:5*heightRef,
        // alignSelf:'flex-end'
      },
      heading:{
        fontSize: 18 * fontRef,
        // marginBottom:-5*heightRef,
        color: globalStyles.Theme.black,
    
        marginHorizontal:5*widthRef,
        fontFamily:globalStyles.font.fontFamilySemiBold,
     
      },  heading2:{
        fontSize: 14 * fontRef,
        // marginBottom:-5*heightRef,
        color: globalStyles.Theme.darkGray,
    paddingVertical:3*heightRef,
      paddingHorizontal:10*widthRef,
        fontFamily:globalStyles.font.fontFamily,
     
      },  text2: {
        fontSize: 16 * fontRef,
        // marginBottom:5*heightRef,
       fontWeight:'700%',
        color: globalStyles.Theme.black,
       
        marginHorizontal:10*widthRef,
        fontFamily:globalStyles.font.fontFamilySemiBold,
      
    //    textAlign:'center',
      
      },price:  {fontSize:18*fontRef,
        marginHorizontal:10*widthRef,
       color:globalStyles.Theme.darkGray,
  
       fontFamily:globalStyles.font.fontFamily,
       },
});
export default styles;
