import {StyleSheet} from 'react-native';
import globalStyles from 'src/config/globalStyles';
import {fontRef, fullHeight, fullWidth, heightRef, widthRef} from 'src/config/screenSize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: globalStyles.Theme.lightpink,
  },
 card:{
  backgroundColor:globalStyles.Theme.backgroundColor,
  paddingHorizontal:10*heightRef,
  borderTopLeftRadius:20*fontRef,
  borderTopEndRadius:20*fontRef,
  justifyContent:'space-between',
  // height:400*heightRef,
  bottom:10*heightRef,
  shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 1,
 }, text:{
  fontSize:24*fontRef,
  color:globalStyles.Theme.black,
  fontFamily:globalStyles.font.fontfmailyBold,
  
  fontWeight:'bold',

  marginHorizontal:10*widthRef
  
},
row:{
  flexDirection:'row',
  alignSelf:'center',
  alignItems:'center',
width:'80%',
  justifyContent:"space-between",
},
price:  {fontSize:22*fontRef,
  fontWeight:'bold',
 color:globalStyles.Theme.darkGray,
 fontFamily:globalStyles.font.fontFamily,
 margin:10*widthRef},
 circle:{width:60*heightRef,height:60*heightRef,borderRadius:60/2*heightRef,borderWidth:1,borderColor:globalStyles.Theme.primary,backgroundColor:globalStyles.Theme.primary,
 alignItems:'center',justifyContent:'center'},
 title:{ fontSize:24*fontRef,
  color:globalStyles.Theme.backgroundColor,
  fontFamily:globalStyles.font.fontfmailyBold,
  

  },row2:{
    flexDirection:'row',
    
    alignItems:'center',
 
    justifyContent:"space-between",
  },heading:{
    fontSize:18*fontRef,
    color:globalStyles.Theme.darkGray,
    fontFamily:globalStyles.font.fontFamily,
    marginHorizontal:10*widthRef,
    // marginBottom:10*heightRef,
  fontWeight:'500',
  },  card2: {
    backgroundColor:globalStyles.Theme.backgroundColor,
    width:'42%',
  paddingHorizontal:10*heightRef,
     height: 240* heightRef,
 
    
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
   text2: {
     fontSize: 18 * fontRef,
     // marginBottom:5*heightRef,
     fontWeight:'bold',
     color: globalStyles.Theme.black,
     fontStyle:'italic',
     marginHorizontal:5*widthRef,
     fontFamily:globalStyles.font.fontFamily,
    // alignSelf:'flex-start',
    textAlign:'center',
   
   },
   row3: {
     flexDirection: 'row',
     padding: 2 * heightRef,
     justifyContent: 'space-between',
     alignItems: 'center',
     alignSelf:'flex-end'
   },
   heading2:{
     fontSize: 14 * fontRef,
     // marginBottom:-5*heightRef,
     color: globalStyles.Theme.black,
 
     marginHorizontal:5*widthRef,
     fontFamily:globalStyles.font.fontFamily,
  
   },
  
   image: {
     width: 120*heightRef,
     height: 120*heightRef,
     // borderRadius:20*heightRef,
     alignSelf:'center',
     marginBottom:-0*heightRef,
   },price2:  {fontSize:18*fontRef,
    fontWeight:'bold',
   color:globalStyles.Theme.darkGray,
   position:'absolute',bottom:5*heightRef,
   right:10,

   fontFamily:globalStyles.font.fontFamily,
   },space:{ justifyContent:'space-around',backgroundColor:globalStyles.Theme.backgroundColor,shadowColor: "#000",borderRadius:20*fontRef,height:40*heightRef,width:110,
   shadowOffset: {
       width: 0,
       height: 2,
   },
   shadowOpacity: 0.25,
   shadowRadius: 3.84,
  
   flexDirection:'row',
   elevation: 5,
 
       },circle2:{
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
       },
});

export default styles;
