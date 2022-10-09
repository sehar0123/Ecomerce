/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import {NavigationContainer} from '@react-navigation/native';
 import React, {useEffect, useState} from 'react';
 import {StatusBar} from 'react-native';
 import {LogBox} from 'react-native';
 import {Provider} from 'react-redux';
 import {PersistGate} from 'redux-persist/integration/react';

 
 import {persistor, store} from 'src/redux/ConfigureStore';
 import Toast, {BaseToast, ErrorToast} from 'react-native-toast-message';
 import SplashScreen from 'src/screens/SplashScreen';
 import BottomStack from 'src/navigation/BottomStack';
 import MainStack from 'src/navigation/MainStack';
 import globalStyles from 'src/config/globalStyles';
import RNSnackbar from 'src/components/snackbar';
 
 LogBox.ignoreAllLogs();
 
 const App = () => {
   const [showSplash, setShowSplash] = useState(true);
 
   useEffect(() => {
     const timeout = setTimeout(() => {
       setShowSplash(false);
     }, 2000);
   }, []);
   return showSplash ? (
     <SplashScreen />
   ) : (
     <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
         <StatusBar backgroundColor={globalStyles.Theme.primary} barStyle='light-content' />
 
         <NavigationContainer independent={true}>
           <MainStack />
         </NavigationContainer>
 
         <RNSnackbar />
       </PersistGate>
     </Provider>
   );
 };
 
 export default App;
 