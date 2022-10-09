import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomNavigator from './BottomNav';
import BoardinScreen from 'src/screens/BoardingScreens';
import BottomStack from './BottomStack';

import Login from 'src/screens/Login';
import Description from 'src/screens/Main/Description';
import Catagories from 'src/screens/Main/Catagories';
import Chat from 'src/screens/Main/Message/Chat';
import Cards from 'src/screens/Cards';
import WishList from 'src/screens/Main/WishList';
import Checkout from 'src/screens/Booking/Checkout';
import Sucess from 'src/screens/Main/Sucsess';
import Address from 'src/screens/Main/Address';
import EditedAddress from 'src/screens/Main/EditedAddress';
import Orders from 'src/screens/Main/Orders';
import DeliveryDetail from 'src/screens/Main/DeliveryDetails';
import Register from 'src/screens/Register';
const Stack = createStackNavigator();
// const modalOptions = {
//   headerShown: false,
//   cardStyle: {backgroundColor: 'transparent'},
//   cardOverlayEnabled: true,
//   gestureEnabled: true,
//   gestureDirection: 'vertical',
//   cardStyleInterpolator: ({current: {progress}}) => ({
//     cardStyle: {
//       // opacity: progress,
//       transform: [
//         {
//           translateY: progress.interpolate({
//             inputRange: [0, 1],
//             outputRange: [fullHeight, 0],
//             extrapolate: 'clamp',
//           }),
//         },
//       ],
//     },
//     overlayStyle: {
//       opacity: progress.interpolate({
//         inputRange: [0, 1],
//         outputRange: [0, 0.7],
//         extrapolate: 'clamp',
//       }),
//     },
//   }),
// };

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={'BoardinScreen'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="BottomStack" component={BottomStack} />
    
      <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="Description" component={Description} />
      <Stack.Screen name="Catagories" component={Catagories} />
      <Stack.Screen name="Cards" component={Cards} />
      <Stack.Screen name="WishList" component={WishList} />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="BoardinScreen" component={BoardinScreen} />
      <Stack.Screen name="Sucess" component={Sucess} />
      <Stack.Screen name="Address" component={Address} />
      <Stack.Screen name="Orders" component={Orders} />
      <Stack.Screen name="EditedAddress" component={EditedAddress} />
      <Stack.Screen name="DeliveryDetail" component={DeliveryDetail} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default MainStack;
