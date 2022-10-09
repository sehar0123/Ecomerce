import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './styles'
import Button from 'src/components/Button'
import { fontRef, heightRef } from 'src/config/screenSize'
import globalStyles from 'src/config/globalStyles'

const Sucess= ({navigation}) => {
  return (
    <View style={styles.container}>
       
      <View style={styles.mainView}>
        <Image
          resizeMode="cover"
          source={require('src/assets/Images/success.gif')}
          style={styles.splashImage}
        />
        
      </View>
      <Text style={styles.heading}>Payment Successful</Text>
      <Button
                  elevation={10}
                  buttonText={'Continue Shopping'}
                  buttonHeight={60 * heightRef}
                  titleFontStyle={'600'}
                  titleColor={globalStyles.Theme.backgroundColor}
                  titleFontSize={20 * fontRef}
                  buttonWidth={'90%'}
                  // isLoading={state.loginLoading}
                  buttonColor={globalStyles.Theme.primary}
                  borderColor={globalStyles.Theme.primary}
                  buttonCorners={5 * heightRef}
                  style={{opacity: 1,alignSelf:'center',position:'absolute',bottom:25*heightRef,}}
                  onPress={() => navigation.navigate('BottomStack')}
                />
    </View>
  )
}

export default Sucess

