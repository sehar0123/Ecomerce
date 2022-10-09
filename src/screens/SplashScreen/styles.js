import {StyleSheet} from 'react-native';
import globalStyles from 'src/config/globalStyles';
import {fullHeight, fullWidth, heightRef, widthRef} from 'src/config/screenSize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  mainView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  splashImage: {
    height: 400*heightRef,
    width: 400*widthRef,
    alignSelf:'center'
  },

});

export default styles;
