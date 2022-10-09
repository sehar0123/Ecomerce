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
  },

  card: {
   backgroundColor:globalStyles.Theme.backgroundColor,
   width:'45%',
 paddingHorizontal:10*heightRef,
    height: 230* heightRef,

   
    alignSelf: 'center',
    // justifyContent:'space-around',
    borderRadius: 10 * heightRef,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 1,
  },
  text: {
    fontSize: 18 * fontRef,
    // marginBottom:5*heightRef,
    fontWeight:'bold',
    color: globalStyles.Theme.black,
    fontStyle:'italic',

    marginHorizontal:5*widthRef,
    fontFamily:globalStyles.font.fontFamily,
   alignSelf:'flex-start',
   textAlign:'center',
  
  },
  row: {
    flexDirection: 'row',
    padding: 2 * heightRef,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf:'flex-end'
  },
  heading:{
    fontSize: 14 * fontRef,
    // marginBottom:-5*heightRef,
    color: globalStyles.Theme.black,

    marginHorizontal:5*widthRef,
    fontFamily:globalStyles.font.fontFamily,
 
  },
 
  image: {
    width: 140*heightRef,
    height: 130*heightRef,
    // borderRadius:20*heightRef,
    alignSelf:'center',
  
  },price:  {fontSize:18*fontRef,
    fontWeight:'bold',
   color:globalStyles.Theme.darkGray,
   position:'absolute',bottom:5*heightRef,
   right:10*widthRef,

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
  },
});
export default styles;
