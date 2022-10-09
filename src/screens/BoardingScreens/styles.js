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
   flex:1,
   
    // alignItems: 'center',
    // justifyContent: 'flex-end',
    backgroundColor: globalStyles.Theme.backgroundColor,
  },
  backgroundImage: {
    height: fullHeight - 220 * heightRef,
    width: '100%',
    // opacity: 0.45,
  },
  title: {
    fontSize: 28 * fontRef,
    color: globalStyles.Theme.black,
    fontWeight: 'bold',
    alignSelf:'center'
  },
  heading: {
    fontSize: 18 * fontRef,
    textAlign: 'center',
alignSelf:'center',
    color: globalStyles.Theme.darkGray,
  },image:{
    marginTop:'50%',
width:300*widthRef,
height:250*heightRef,
borderRadius:10,
marginBottom:10,
alignSelf:'center',
  }
});

export default styles;
