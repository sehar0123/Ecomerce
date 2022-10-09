import {StyleSheet} from 'react-native';
import globalStyles from 'src/config/globalStyles';
import {
  fontRef,
  fullHeight,
  fullWidth,
  heightRef,
  widthRef,
} from 'src/config/screenSize';

const styles = StyleSheet.create({
  circle: {
    width: 90 * widthRef,
    height: 40 * heightRef,
    margin: 9 * heightRef,
    borderRadius: 20 * fontRef,
    justifyContent: 'center',
    alignItems: 'center',
  },
  border: {
    width: 90 * widthRef,
    height: 40 * heightRef,
    margin: 9 * heightRef,
    backgroundColor: globalStyles.Theme.backgroundColor,
    borderRadius: 20 * fontRef,
    borderWidth: 0.8,
    borderColor: globalStyles.Theme.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 14 * fontRef,
    fontWeight: 'bold',
    color: globalStyles.Theme.lightGray,
  },
  title2: {
    fontSize: 14 * fontRef,
    fontWeight: 'bold',
    color: globalStyles.Theme.backgroundColor,
  },
  box: {
    width: 120 * heightRef,
    height: 50 * heightRef,
    borderWidth: 1 * fontRef,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    margin: 5 * heightRef,
    padding: 10 * heightRef,
    borderColor: globalStyles.Theme.primary,
    borderRadius: 1 * fontRef,
  },
  title3: {
    fontSize: 14 * fontRef,
    fontWeight: 'bold',

    color: globalStyles.Theme.black,
  },
  description: {
    fontSize: 14 * fontRef,
    fontWeight: '500',

    color: globalStyles.Theme.darkGray,
  },price:  {fontSize:18*fontRef,
    marginHorizontal:10*widthRef,
   color:globalStyles.Theme.black,
fontWeight:'bold',
   fontFamily:globalStyles.font.fontFamily,
   },
});
export default styles;
