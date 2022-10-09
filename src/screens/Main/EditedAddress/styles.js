import {Platform, StyleSheet} from 'react-native';
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
    // alignItems: 'center',
  
    
    backgroundColor: globalStyles.Theme.white,
  },inner:{
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'space-between',
   
  },
  backgroundImage: {
    height: fullHeight,
    width: '100%',
    opacity: 0.45,
  },header2:{
    borderRadius:5,
    // borderColor:globalStyles.Theme.red,
    // borderWidth:1,
width:'28%',
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
width:'28%',
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
  feildStyle: {
    width: '90%',
   alignSelf:'center',
   marginTop:30*heightRef,
  },
  passFeildStyle: {
    width: '90%',
    marginTop: -50,
    minHeight: 118 * widthRef,
    fontSize: 14 * heightRef,
  },card:{
    backgroundColor:globalStyles.Theme.backgroundColor,
    width:'90%',
    alignSelf:'center',
    padding:20*heightRef,
    justifyContent:'space-around',
    borderRadius:20,
   marginTop:30*heightRef,
  },text:{
    fontSize:18*fontRef,
    color:globalStyles.Theme.black,
    fontFamily:globalStyles.font.fontFamily,
    
alignSelf:'center',
textAlign:'center',

  
    // marginHorizontal:10*widthRef
    
  },
});

export default styles;
