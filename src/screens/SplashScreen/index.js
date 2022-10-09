import React, {useEffect} from 'react';
import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import globalStyles from 'src/config/globalStyles';
import styles from './styles';
const SplashScreen = () => {
  return (
    <View style={styles.container}>
        <StatusBar backgroundColor={globalStyles.Theme.primary} barStyle='light-content' />
      <View style={styles.mainView}>
        <Image
          resizeMode="cover"
          source={require('src/assets/Images/splash.gif')}
          style={styles.splashImage}
        />
      </View>
    </View>
  );
};

export default SplashScreen;
