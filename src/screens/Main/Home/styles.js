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
  },row:{flexDirection:'row',justifyContent:'space-between',width:'95%',alignSelf:'center',alignItems:'center'},
 
  item: {
    width: ScreenWidth-200 ,
    height: '100%',
  }, 
  item2: {
    width:fullWidth-10 ,
    height: '100%',
    marginTop:10*heightRef,
  },
  imageContainer: {
    height: '100%',
    marginBottom: Platform.select({ios: 0, android: 8}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 10*fontRef,
    backgroundColor:globalStyles.Theme.primary,
  
  },
  imageContainer2: {
    height: '100%',
    // width:500,
    alignSelf:'center',
    marginBottom: Platform.select({ios: 0, android: 8}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 10*fontRef,
    backgroundColor:globalStyles.Theme.primary,
  
  },image2: {
    ...StyleSheet.absoluteFillObject,
    resizeMode:'cover',
   
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode:'contain',
  },title:{
    fontSize:24*fontRef,
    color:globalStyles.Theme.red,
    // fontStyle:'italic',
    fontFamily:globalStyles.font.fontfmailyBold,
    margin:10*widthRef
    
  },
  text:{
    fontSize:16*fontRef,
    color:globalStyles.Theme.black,
    textAlign:'center',
    fontWeight:'bold',
    textTransform:'uppercase',
    margin:10*widthRef
    
  },spcae:{
    height: 170 * heightRef,
    justifyContent: 'center',
    alignItems: 'center',

  },circle:{width:80,height:80,borderRadius:80/2,borderWidth:1,borderColor:globalStyles.Theme.primary},see:{
    fontSize:16*fontRef,
    color:globalStyles.Theme.red,
    textAlign:'center',
    fontWeight:'bold',
    fontFamily:globalStyles.font.fontFamily,
 textDecorationLine:'underline',
  },header:{flexDirection:"row",width:'26%',justifyContent:'space-around', position:'absolute',top:15*heightRef,alignItems:'center',right:0,
  },
  disc:{position:'absolute',top:0*heightRef,left:0*widthRef,height:60*heightRef,width:60*heightRef},
  price:  {fontSize:18*fontRef,
   fontWeight:'bold',
  color:globalStyles.Theme.backgroundColor,
  
  margin:10*widthRef},border:{backgroundColor:globalStyles.Theme.primary,position:'absolute',bottom:0,flexDirection:'row',borderTopRightRadius:20*fontRef,borderBottomRightRadius:20*fontRef,borderBottomLeftRadius:10*heightRef}
});
export default styles;
