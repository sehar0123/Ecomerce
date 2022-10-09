import {StyleSheet} from 'react-native';
import globalStyles from 'src/config/globalStyles';
import {fontRef, heightRef, widthRef} from 'src/config/screenSize';
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 60 * heightRef,
    alignSelf: 'center',
    backgroundColor: globalStyles.Theme.primary,
    borderBottomLeftRadius: 10 * heightRef,
    borderBottomRightRadius: 10 * heightRef,
  },
  headerInner: {
    flexDirection: 'row',
    alignItems: 'center',

    marginLeft: '5%',
  },
  headerText: {
    fontSize: 28 * heightRef,
fontFamily:globalStyles.font.fontfmailyBold,
    marginLeft: 15 * widthRef,
    marginTop: 3,
    color: globalStyles.Theme.backgroundColor,
    // fontStyle: 'italic',
    fontWeight: '500',
  },
  border: {
    backgroundColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },

    width: 40 * heightRef,
    height: 40 * heightRef,
    borderRadius: 20 * heightRef,
    marginRight: 10 * widthRef,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
export default styles;
