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

   backgroundColor: globalStyles.Theme.lightpink,
  },header2:{
    borderRadius:5,
    // borderColor:globalStyles.Theme.red,
    // borderWidth:1,
width:'30%',
// height:40,
padding:5*heightRef,
flexDirection:'row',
justifyContent:"space-around",
// alignItems:'center',
backgroundColor:globalStyles.Theme.primary,
shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
  },
  header:{
  borderRadius:5,
width:'30%',
// height:40,
padding:5*heightRef,
flexDirection:'row',
justifyContent:"space-around",
// alignItems:'center',
backgroundColor:globalStyles.Theme.backgroundColor,
shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
      },
      card2:{
        backgroundColor:globalStyles.Theme.backgroundColor,
        width:'95%',
        alignSelf:'center',
        padding:10*heightRef,
        justifyContent:'space-around',
        borderRadius:20,
       marginTop:30*heightRef,
      },
  card: {
    backgroundColor: globalStyles.Theme.backgroundColor,
   width:'85%',
 padding:10*heightRef,
    // height: 210 * heightRef,
// flexDirection:'row',
   justifyContent:'space-between',
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
    fontSize: 22 * fontRef,
    // marginBottom:5*heightRef,
   fontWeight:'700%',
    color: globalStyles.Theme.black,
   
    marginHorizontal:10*widthRef,
    fontFamily:globalStyles.font.fontFamilySemiBold,
  
//    textAlign:'center',
  
  },
  text2: {
    fontSize: 16 * fontRef,
    // marginBottom:5*heightRef,
   fontWeight:'700%',
    color: globalStyles.Theme.black,
 
    marginHorizontal:10*widthRef,
    fontFamily:globalStyles.font.fontFamilySemiBold,
  
//    textAlign:'center',
  
  },
  title: {
    fontSize: 22 * fontRef,
    // marginBottom:5*heightRef,
   fontWeight:'bold',
    color: globalStyles.Theme.black,
   padding:10,
    marginHorizontal:5*widthRef,
    fontFamily:globalStyles.font.fontFamilySemiBold,
  
//    textAlign:'center',
  
  },

  heading:{
    fontSize: 18 * fontRef,
    // marginBottom:-5*heightRef,
    color: globalStyles.Theme.darkGray,

    marginHorizontal:10*widthRef,
    fontFamily:globalStyles.font.fontFamily,
 
  },
  heading2:{
    fontSize: 14 * fontRef,
    // marginBottom:-5*heightRef,
    color: globalStyles.Theme.darkGray,

    marginHorizontal:10*widthRef,
    fontFamily:globalStyles.font.fontFamily,
 
  },
  image: {
    width: 90*heightRef,
    height: 90*heightRef,
    // borderRadius:20*heightRef,
    alignSelf:'center',

  },price:  {fontSize:18*fontRef,
    marginHorizontal:10*widthRef,
   color:globalStyles.Theme.black,
fontWeight:'bold',
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
    
    elevation: 2,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:globalStyles.Theme.grey,
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
  },space:{ justifyContent:'space-around',backgroundColor:globalStyles.Theme.backgroundColor,shadowColor: "#000",borderRadius:20*fontRef,height:100*heightRef,width:40,
  shadowOffset: {
      width: 0,
      height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  alignItems:'center',
  alignSelf:'center',
  elevation: 5,
  marginTop:20*heightRef,
  marginRight:50*widthRef,
      },view:{height:90,justifyContent:'space-around',width:'60%'},footer:{
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
       
        justifyContent:'space-between',
        flexDirection:'row',
        paddingHorizontal:10*heightRef,
        paddingVertical:20*heightRef,
        alignItems:'center',
      },space2:{ backgroundColor:globalStyles.Theme.backgroundColor,shadowColor: "#000",borderRadius:20*fontRef,height:30*heightRef,width:30*widthRef,alignItems:'center',
      shadowOffset: {
          width: 0,
          height: 2,
      },
    
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    justifyContent:'center',
     
      elevation: 5,
     
      
          }, image2: {
            height: 50*heightRef,
            width: 50*widthRef
            ,
            alignSelf: 'center',
          },
          iconview: {
            width: 120*heightRef,
            height: 100*heightRef,
        
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            borderRadius: 15,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.25,
            shadowRadius: 0.84,
        
            elevation: 1,
          }, cardview: {
            flexDirection: 'row',
            width:'90%',
            alignSelf:'center',
            marginHorizontal: 10*heightRef,
            justifyContent: 'space-between',
          },divider:{width:1,height:50,backgroundColor:globalStyles.Theme.darkGray,alignSelf:'center'}
});
export default styles;
