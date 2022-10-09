import {StyleSheet} from 'react-native';
import globalStyles from 'src/config/globalStyles';
import {fontRef, fullHeight, fullWidth, heightRef, widthRef} from 'src/config/screenSize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: globalStyles.Theme.backgroundColor,
  },
  mainView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  splashImage: {
    height:390*heightRef,
    width: 400*widthRef,
    alignSelf:'center',
    marginBottom:'60%'
  },
  heading:{
    fontSize:22*fontRef,
    color:globalStyles.Theme.darkGray,
    fontFamily:globalStyles.font.fontFamily,
  alignSelf:'center',
    // marginBottom:10*heightRef,
  fontWeight:'500',
  },
});

export default styles;
