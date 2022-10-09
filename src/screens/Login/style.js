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
    // justifyContent: 'flex-start',
    backgroundColor: globalStyles.Theme.white,
  },
  backgroundImage: {
    height: fullHeight,
    width: '100%',
    opacity: 0.45,
  },
  feildStyle: {
    width: '90%',
    marginTop: 130 * heightRef,
    minHeight: 118 * widthRef,
  },
  passFeildStyle: {
    width: '90%',
    marginTop: -50,
    minHeight: 118 * widthRef,
    fontSize: 14 * heightRef,
  },
});

export default styles;
