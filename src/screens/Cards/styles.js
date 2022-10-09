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
  container: {
    flex: 1,

    backgroundColor:globalStyles.Theme.lightpink
  },

  card: {
    backgroundColor: globalStyles.Theme.backgroundColor,
   width:'85%',
 padding:10*heightRef,
    // height: 210 * heightRef,
flexDirection:'row',
   
    alignSelf: 'center',
    borderRadius: 10 * heightRef,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 3,
  },
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
    // alignSelf:'flex-end'
  },
  heading:{
    fontSize: 18 * fontRef,
    // marginBottom:-5*heightRef,
    color: globalStyles.Theme.black,

    marginHorizontal:5*widthRef,
    fontFamily:globalStyles.font.fontFamilySemiBold,
 
  },
 
  image: {
    width: 90*heightRef,
    height: 90*heightRef,
    // borderRadius:20*heightRef,
    alignSelf:'center',

  },price:  {fontSize:18*fontRef,
   
   color:globalStyles.Theme.darkGray,
 

   fontFamily:globalStyles.font.fontFamily,
   },circle:{
    width: 30*heightRef,
    height: 30*heightRef,
    borderRadius:15*fontRef,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 5,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:globalStyles.Theme.red,
    // borderRadius:20*heightRef,
    alignSelf:'center'
   },searchView: {
    width: '93%',
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    elevation: 10,
    shadowColor: 'gray',
    alignSelf:'center',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    marginTop: 10,
  },
  inputFeild: {
    width: '90%',
    marginLeft: 10,
    marginBottom: 10,
  },space:{ justifyContent:'space-around',backgroundColor:globalStyles.Theme.backgroundColor,shadowColor: "#000",borderRadius:20*fontRef,height:40*heightRef,width:110,
  shadowOffset: {
      width: 0,
      height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  alignItems:'center',
  alignSelf:'flex-end',
  flexDirection:'row',
  elevation: 5,
 marginBottom:5*heightRef,
  marginRight:40*widthRef,
      },view:{height:100,justifyContent:'space-around',width:'95%'},footer:{
        backgroundColor: globalStyles.Theme.backgroundColor,
        width:'100%',
      padding:10*heightRef,
      height:190*heightRef,
      borderTopLeftRadius:30*heightRef,
      borderTopRightRadius:30*heightRef,
         // height: 210 * heightRef,
   
        position:'absolute',
        bottom:0,
justifyContent:'space-around',
         alignSelf: 'center',
         borderRadius: 10 * heightRef,
     
         shadowColor: '#000',
         shadowOffset: {
           width: 0,
           height: 3,
         },
         shadowOpacity: 0.29,
         shadowRadius: 4.65,
     
         elevation: 3,
       
      },
      row:{
        width:'90%',
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center'
      },space2:{ backgroundColor:globalStyles.Theme.backgroundColor,shadowColor: "#000",borderRadius:20*fontRef,height:30*heightRef,width:30*widthRef,alignItems:'center',
      shadowOffset: {
          width: 0,
          height: 2,
      },
    
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    justifyContent:'center',
     
      elevation: 5,
     
      
          },
});
export default styles;
