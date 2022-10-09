import React, {useState} from 'react';
import {StatusBar, StyleSheet, TouchableOpacity, View} from 'react-native';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {useNavigation} from '@react-navigation/native';
import {getFontSize, getHeight, getWidth} from 'src/config/functions';
import {heightRef} from 'src/config/screenSize';
import globalStyles from 'src/config/globalStyles';
import Home from 'src/screens/Main/Home';
import ServiceCollectionScreen from 'src/screens/Service/serviceCollection';

import Profile from 'src/screens/ProfileDashboard/Profile';
// import ServiceCollectionScreen from 'src/screens/Service/serviceCollection';

StatusBar.setBarStyle('dark-content');
const Bootombar = props => {
  const navigation = useNavigation();
  const [type, setType] = useState('down');

  const [wallet, setWallet] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const onClickButton = () => {
    setModalVisible(!modalVisible);
  };
  const iconChnage = (routeName, selectedTab) => {
    let icon = '';
    let Icon = null;
    console.log(routeName, selectedTab);
    switch (routeName) {
      case 'Home':
        icon = 'home-outline';
        break;
      case 'Shop':
        icon = 'storefront-outline';
        break;
      case 'Wilet':
        icon = 'hammer-wrench';
        break;
      case 'Profile':
        Icon = 'person-outline';
        break;
    }
    return (
      <View>
        {Icon == null ? (
          <MaterialCommunityIcons
            name={icon}
            size={30 * heightRef}
            color={
              routeName === selectedTab ? globalStyles.Theme.primary : 'gray'
            }
          />
        ) : (
          <MaterialIcons
            name={Icon}
            size={30 * heightRef}
            color={
              routeName === selectedTab ? globalStyles.Theme.primary : 'gray'
            }
          />
        )}
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <CurvedBottomBar.Navigator
        style={[type === 'down']}
        type={type}
        height={70 * heightRef}
        circleWidth={35 * heightRef}
        bgColor="#F2F3F4"
        borderTopLeftRight={true}
        initialRouteName="Home"
        renderCircle={() => (
          <TouchableOpacity
            style={[type === 'down' ? styles.btnCircle : styles.btnCircleUp]}
            onPress={onClickButton}>
            <MaterialCommunityIcons
              name="home-city-outline"
              size={35 * heightRef}
              color={globalStyles.Theme.primary}
            />
          </TouchableOpacity>
        )}
        tabBar={({routeName, selectedTab, navigate}) => {
          return (
            <TouchableOpacity
              onPress={() => navigate(routeName)}
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                // borderTopWidth: 1,
                // borderRadius: 20,
                // borderTopColor: '#D3D3D3',
                // opacity: 0.9,
              }}>
              {iconChnage(routeName, selectedTab)}
            </TouchableOpacity>
          );
        }}>
        <CurvedBottomBar.Screen
          name="Home"
          position="left"
          component={({navigate}) => <Home />}
        />
        <CurvedBottomBar.Screen
          name="Wilet"
          component={({navigate}) => <ServiceCollectionScreen />}
          position="left"
        />
        <CurvedBottomBar.Screen
          name="Shop"
          component={({navigate}) => <ServiceCollectionScreen />}
          position="right"
          marginTop={10}
        />

        <CurvedBottomBar.Screen
          name="Profile"
          component={({navigate}) => <Profile />}
          position="right"
        />
      </CurvedBottomBar.Navigator>
      {/* <Modal
        backdropOpacity={0.3}
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(false)}
        onSwipeComplete={() => setModalVisible(false)}
        swipeDirection={['down']}
        style={styles.bottomView}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.content}>
          <View style={styles.centerContent}>
            <View style={styles.headLine} />
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
              source={require('.././Assest/images/event.png')}
              style={{width: 60 * heightRef, height: 60 * heightRef}}
            />
            <Text style={styles.title}>Comming Events</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={require('.././Assest/images/group.png')}
                style={{width: 60 * heightRef, height: 60 * heightRef}}
              />
              <Text style={styles.title}>Create Group</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SurfSelection');
                setModalVisible(false);
              }}
              style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={require('.././Assest/images/class.png')}
                style={{width: 60 * heightRef, height: 60 * heightRef}}
              />
              <Text style={styles.title}>Short Classes</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: getHeight(1),
              }}>
              <Image
                source={require('.././Assest/images/location.png')}
                style={{width: 60 * heightRef, height: 60 * heightRef}}
              />
              <Text style={styles.title}>Book a vanue</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={require('.././Assest/images/track.png')}
                style={{width: 60 * heightRef, height: 60 * heightRef}}
              />
              <Text style={styles.title}>Track Points</Text>
            </View>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
            }}>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={{
                backgroundColor: 'white',
                width: 50 * heightRef,
                height: 50 * heightRef,
                borderRadius: 25 * heightRef,
                alignItems: 'center',
                justifyContent: 'center',
                shadowOffset: {
                  width: 0,
                  height: 9,
                },
                shadowOpacity: 0.48,
                shadowRadius: 11.95,
                elevation: 18,
              }}>
              <MaterialCommunityIcons
                name={'close-circle-outline'}
                color="#24BFF0"
                size={35}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Modal> */}
    </View>
  );
};
export default Bootombar;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnCircle: {
    width: 80 * heightRef,
    height: 80 * heightRef,
    borderRadius: 40 * heightRef,
    alignItems: 'center',
    borderWidth: 2 * heightRef,
    borderColor: globalStyles.Theme.primary,
    justifyContent: 'center',
    backgroundColor: '#F2F3F4',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
    bottom: 33 * heightRef,
  },
  btnCircleUp: {
    width: 50 * heightRef,
    height: 50 * heightRef,
    borderRadius: 40 * heightRef,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F2F3F4',
    bottom: 18 * heightRef,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: '#48CEF6',
  },
  img: {
    width: 30,
    height: 30,
  },
  bottomView: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headLine: {
    height: 6,
    width: 55,
    borderRadius: 5,
    backgroundColor: '#EAEAEA',
    marginBottom: getHeight(1),
  },
  content: {
    backgroundColor: 'white',
    padding: 22,
    borderTopRightRadius: 17,
    borderTopLeftRadius: 17,
    justifyContent: 'space-around',
    height: 335 * heightRef,
  },
  title: {
    // fontFamily: theme.fontFamily,
    fontSize: getFontSize(2),
    fontWeight: 'bold',
    color: '#373737',
  },
  btn: {
    marginTop: getHeight(3),
    // backgroundColor: theme.primary,
    flexDirection: 'row',
    alignSelf: 'center',
    height: getHeight(8),
    width: getWidth(70),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
  btnText: {
    color: 'white',
    fontSize: getFontSize(3),
    // fontFamily: theme.fontFamily,
  },
});
