import {StyleSheet} from 'react-native';
import globalStyles from 'src/config/globalStyles';
import {fullWidth, heightRef} from 'src/config/screenSize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  headerInner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    marginLeft: 20,
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  profileView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 80 * heightRef,
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
  },
  imageView: {height: 50, width: 50, borderRadius: 25, marginLeft: 20},
  name: {
    marginLeft: 20,
    fontSize: 18,
    fontWeight: '500',
    color: '#2A3235',
  },
  label: {
    marginLeft: 20,
    fontSize: 14,
    fontWeight: '600',
    color: '#149E7A',
  },
  bookButton: {
    marginTop: 20,
    alignSelf: 'flex-start',
    marginRight: 20,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    marginBottom: 30,
    elevation: 20,
  },
  blockButton: {
    alignSelf: 'flex-end',
    marginRight: 10,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    marginVertical: 5,
    elevation: 5,
  },
  LineFull: {
    height: 1,
    width: '100%',
    backgroundColor: '#CDDADE',

    alignSelf: 'center',
  },
  button: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.4,
    elevation: 5,
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginTop: 20,
  },
  selectionButton: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.4,
    elevation: 5,
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginTop: 10,
  },
  inputFeild: {
    width: '65%',
    marginTop: -30,
    alignSelf: 'flex-start',
  },
  sectionView: {
    flexDirection: 'row',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 10,
  },
  sectionLine: {width: '40%', backgroundColor: 'gray', height: 0.5},
  sectionText: {marginHorizontal: 10, fontSize: 12, fontWeight: '500',color:globalStyles.Theme.darkGray},
  selectionView: {
    height: 160,
    width: 70,
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputView: {
    width: '100%',
    height: '13%',
    flexDirection: 'row',
  },
  textInput: {
    fontSize: 15,
    fontWeight: '500',
  },
  tickImage: {
    height: 10,
    width: 16,
    alignSelf: 'center',
    marginRight: 15,
  },
  messageTime: {
    fontSize: 12,
    fontWeight: '500',
    color: '#B7C1C5',
    marginHorizontal: 35,
    alignSelf: 'flex-end',
  },
  messageText: {
    fontSize: 14,
    fontWeight: '500',
  },
  messageView: {
    width: fullWidth,
    marginBottom: 3,
  },
});

export default styles;
