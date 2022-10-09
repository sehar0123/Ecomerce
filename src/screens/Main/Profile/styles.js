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
  image: {
    width: '100%',
    alignSelf:'center',
    height: 210 * heightRef,
  },
  header: {
    position: 'absolute',
    top: 5 * heightRef,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '98%',
    paddingTop: 10 * heightRef,
    alignSelf: 'center',
  },
  image2: {
    width: 130 * heightRef,
    height: 130 * heightRef,
    borderRadius: (130 / 2) * heightRef,
    // marginTop: 50*heightRef,
    borderWidth: 2,
    borderColor:globalStyles.Theme.primary,
    opacity: 10,
  },
  circularImage: {
    width: 150 * widthRef,
    height: 150 * heightRef,
    alignSelf: 'center',

    // position: 'absolute',
    // bottom: 0 * heightRef,
  },
  title: {
    fontSize: 22 * fontRef,
    color: globalStyles.Theme.backgroundColor,
    fontWeight: 'bold',
  },
  card: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 40 * heightRef,
    paddingHorizontal: 10 * heightRef,
    paddingVertical: 10 * heightRef,
    backgroundColor: globalStyles.Theme.backgroundColor,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    marginTop: 7,
    marginBottom: 7,
    justifyContent: 'space-between',
  },
  rowview: {
    flexDirection: 'row',
    margin: 5 * heightRef,
    width: '90%',
    alignSelf: 'center',
    // backgroundColor: 'red',
    justifyContent: 'space-between',
  },

  name: {
    fontSize: 25 * fontRef,
    color: globalStyles.Theme.black,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  location: {
    fontSize: 16 * fontRef,
    textAlign: 'center',
    color: globalStyles.Theme.darkGray,
  },
  heading: {
    fontSize: 16 * fontRef,
    color: globalStyles.Theme.black,
    fontWeight: '900',
  },
  card2: {
    width: 125 * heightRef,
    height: 125 * heightRef,
    borderRadius: 5 * fontRef,
    justifyContent: 'center',
    alignItems: 'center',
   
    backgroundColor: globalStyles.Theme.backgroundColor,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 2,
  },
  des: {
    fontSize: 16 * fontRef,
    fontWeight: '800',
    textAlign: 'center',
    color: globalStyles.Theme.darkGray,
  },
  header:{flexDirection:"row",width:'26%',justifyContent:'space-around', position:'absolute',top:15*heightRef,alignItems:'center',right:0,
  },
});
export default styles;
