import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Share,
  Linking,
  Alert,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  DrawerItem,
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import Animated, {color} from 'react-native-reanimated';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Bootombar from './Battom';
import globalStyles from 'src/config/globalStyles';
import LinearGradient from 'react-native-linear-gradient';

// screens
// import ServiceProviderScreen from 'src/screens/Service/serviceProviders';
import ServiceCollectionScreen from 'src/screens/Service/serviceCollection';
import {getFontSize, getHeight, getWidth} from 'src/config/functions';
// import {getFontSize, getHeight, getWidth} from '../../FuncsAndRespons';
import {DrawerActions} from '@react-navigation/native';
import {fontRef, heightRef, widthRef} from 'src/config/screenSize';
import Button from 'src/components/Button';
import BottomStack from './BottomStack';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const GOOGLE_PACKAGE_NAME = 'agrawal.trial.yourfeedback';
const APPLE_STORE_ID = 'id284882215';
// const [currentScreen, setCurrentScreen] = useState('Home');
const Screens = ({navigation, style, currentScreen}) => {
  console.log('---->', currentScreen);
  // navigation.navigate(currentScreen);
  return (
    <Animated.View style={StyleSheet.flatten([styles.stack, style])}>
      <Stack.Navigator
        headerShown={false}
        initialRouteName={currentScreen}
        screenOptions={{
          headerTintColor: 'white',

          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Feather
                name="menu"
                size={getFontSize(4)}
                color={globalStyles.Theme.backgroundColor}
                style={{paddingHorizontal: 10}}
              />
            </TouchableOpacity>
          ),
        }}>
        <Stack.Screen
          name="Home"
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: globalStyles.Theme.primary,
            },
          }}>
          {props => <BottomStack {...props} />}
        </Stack.Screen>
        <Stack.Screen
          name="Service"
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: globalStyles.Theme.primary,
            },
          }}>
          {props => <ServiceCollectionScreen {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </Animated.View>
  );
};

const DrawerContent = props => {
  return (
    <DrawerContentScrollView
      {...props}
      scrollEnabled={false}
      contentContainerStyle={{flex: 1, justifyContent: 'space-between'}}>
      <View style={{marginTop: getHeight(5)}}>
        <View
          style={{
            marginLeft: getWidth(5),
            // width: getWidth(65),
            // backgroundColor: 'pink',
            alignItems: 'flex-start',
          }}>
          <Button
            elevation={10}
            buttonText={'Edit'}
            buttonHeight={28 * heightRef}
            titleFontStyle={'600'}
            titleColor={globalStyles.Theme.primary}
            titleFontSize={16 * fontRef}
            buttonWidth={'40%'}
            buttonColor={'white'}
            borderColor={globalStyles.Theme.primary}
            buttonCorners={25 * heightRef}
            style={{opacity: 1, position: 'absolute', right: 0, top: 7}}
            onPress={() => {
              props.setCurrent('home');
              props.navigation.closeDrawer();
            }}
          />
          <Image
            source={require('src/assets/Images/person.png')}
            resizeMode="center"
            style={styles.avatar}
          />
          <Text style={styles.heading}>Your Name</Text>
          <Text style={styles.email}>Level/ Verified/</Text>
        </View>
        <View style={{marginTop: getHeight(5)}}>
          <DrawerItem
            label="Home"
            labelStyle={styles.drawerLabel}
            style={
              props.state.routes[0].name == 'Home'
                ? styles.selectedDrawerItem
                : styles.drawerItem
            }
            onPress={() => {
              props.setCurrent('Home');
              props.navigation.closeDrawer();
            }}
            icon={() => (
              <Ionicons
                name="home-outline"
                color={globalStyles.Theme.backgroundColor}
                size={getFontSize(2.8)}
              />
            )}
          />
          <DrawerItem
            label="Services"
            labelStyle={styles.drawerLabel}
            style={
              props.state.routes[0].name == 'Service'
                ? styles.selectedDrawerItem
                : styles.drawerItem
            }
            onPress={() => {
              console.log('hehe', props.state.routes[0].name);
              props.setCurrent('Service');
              props.navigation.closeDrawer();
            }}
            icon={() => (
              <MaterialCommunityIcons
                name="hammer-wrench"
                color={globalStyles.Theme.backgroundColor}
                size={getFontSize(2.8)}
              />
            )}
          />
          <DrawerItem
            label="Property"
            labelStyle={styles.drawerLabel}
            style={[styles.drawerItem]}
            // onPress={() => props.navigation.navigate('Dashboard')}
            icon={() => (
              <MaterialCommunityIcons
                name="magnify-plus"
                color={globalStyles.Theme.backgroundColor}
                size={getFontSize(2.8)}
              />
            )}
          />
          <DrawerItem
            label="Shop"
            labelStyle={styles.drawerLabel}
            style={styles.drawerItem}
            // onPress={() => props.navigation.navigate('Dashboard')}
            icon={() => (
              <Entypo
                name="shop"
                color={globalStyles.Theme.backgroundColor}
                size={getFontSize(2.8)}
              />
            )}
          />
          <DrawerItem
            label="Orders"
            labelStyle={styles.drawerLabel}
            style={styles.drawerItem}
            // onPress={() => props.navigation.navigate('Dashboard')}
            icon={() => (
              <MaterialCommunityIcons
                name="clipboard-text"
                color={globalStyles.Theme.backgroundColor}
                size={getFontSize(2.8)}
              />
            )}
          />
          <DrawerItem
            label="Wallet"
            labelStyle={styles.drawerLabel}
            style={styles.drawerItem}
            // onPress={() => props.navigation.navigate('Dashboard')}
            icon={() => (
              <Entypo
                name="wallet"
                color={globalStyles.Theme.backgroundColor}
                size={getFontSize(2.8)}
              />
            )}
          />
          <DrawerItem
            label="Address"
            labelStyle={styles.drawerLabel}
            style={styles.drawerItem}
            // onPress={() => props.navigation.navigate('Dashboard')}
            icon={() => (
              <FontAwesome5
                name="address-card"
                color={globalStyles.Theme.backgroundColor}
                size={getFontSize(2.8)}
              />
            )}
          />
          <DrawerItem
            label="Notifications"
            labelStyle={styles.drawerLabel}
            style={styles.drawerItem}
            // onPress={() => props.navigation.navigate('Dashboard')}
            icon={() => (
              <Ionicons
                name="notifications-outline"
                color={globalStyles.Theme.backgroundColor}
                size={getFontSize(2.8)}
              />
            )}
          />
          <DrawerItem
            label="Customer Care"
            labelStyle={styles.drawerLabel}
            style={styles.drawerItem}
            // onPress={() => props.navigation.navigate('Dashboard')}
            icon={() => (
              <AntDesign
                name="customerservice"
                color={globalStyles.Theme.backgroundColor}
                size={getFontSize(2.8)}
              />
            )}
          />
          <DrawerItem
            label="Settings"
            labelStyle={styles.drawerLabel}
            style={styles.drawerItem}
            // onPress={() => props.navigation.navigate('Dashboard')}
            icon={() => (
              <Feather
                name="settings"
                color={globalStyles.Theme.backgroundColor}
                size={getFontSize(2.8)}
              />
            )}
          />
          <DrawerItem
            label="Logout"
            labelStyle={styles.drawerLabel}
            style={[styles.drawerItem, {marginTop: 30 * heightRef}]}
            // onPress={() => props.navigation.navigate('Dashboard')}
            icon={() => (
              <MaterialIcons
                name="logout"
                color={globalStyles.Theme.backgroundColor}
                size={getFontSize(2.8)}
              />
            )}
          />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

export default function DrawerStack() {
  const [progress, setProgress] = React.useState(new Animated.Value(0));
  const [current, setCurrent] = React.useState('Home');
  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.7],
  });
  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 0],
    outputRange: [0, 0],
  });

  const animatedStyle = {borderRadius, transform: [{scale}]};

  return (
    <LinearGradient
      style={{flex: 1}}
      colors={[globalStyles.Theme.primary, globalStyles.Theme.orange]}>
      <Drawer.Navigator
        // initialRouteName="Service"
        drawerType="slide"
        overlayColor="transparent"
        drawerStyle={styles.drawerStyles}
        // contentContainerStyle={{flex: 1}}
        drawerContentOptions={{
          activeBackgroundColor: 'transparent',
          activeTintColor: 'white',
          inactiveTintColor: 'white',
        }}
        sceneContainerStyle={{backgroundColor: 'transparent'}}
        drawerContent={props => {
          console.log('====', props);
          setProgress(props.progress);
          return <DrawerContent setCurrent={setCurrent} {...props} />;
        }}>
        <Drawer.Screen options={{headerShown: false}} name={current}>
          {props => (
            <Screens currentScreen={current} {...props} style={animatedStyle} />
          )}
        </Drawer.Screen>
      </Drawer.Navigator>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  stack: {
    flex: 1,
    shadowColor: 'black',
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 5,
    // overflow: 'scroll',
    // borderWidth: 1,
    // borderBottomColor: "green",
  },
  drawerStyles: {flex: 1, width: '60%', backgroundColor: 'transparent'},
  drawerItem: {
    alignItems: 'flex-start',
    marginVertical: -2,

    // justifyContent: "center",
  },
  selectedDrawerItem: {
    alignItems: 'flex-start',
    marginVertical: -2,
    // justifyContent: "center",
    backgroundColor: globalStyles.Theme.primary,
  },
  drawerLabel: {
    color: globalStyles.Theme.backgroundColor,

    marginLeft: -16,
    fontSize: getFontSize(1.8),
    width: getWidth(60),
  },
  heading: {
    fontSize: getFontSize(3),
    fontWeight: 'bold',
    textAlign: 'center',
    color: globalStyles.Theme.backgroundColor,
  },
  email: {
    fontSize: getFontSize(1.5),
    fontWeight: '500',
    textAlign: 'center',
    color: 'white',
  },
  avatar: {
    marginBottom: 6,
    height: 60,
    width: 60,
    borderRadius: 30,
    scale: 0.5,
    // alignSelf: 'center',
  },
});
