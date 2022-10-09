import React, {useEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Header from 'src/components/Header';
import {CheckBox} from 'react-native-elements';
import View from 'src/components/View';
import styles from './style';
import InputField from 'src/components/inputField';
import globalStyles from 'src/config/globalStyles';
import Button from 'src/components/Button';
import {useNavigation} from '@react-navigation/native';
import Head from 'src/components/Head';
import {fontRef, heightRef, widthRef} from 'src/config/screenSize';
import Icon from 'react-native-dynamic-vector-icons';
import {useSelector} from 'react-redux';
import {KeyboardAvoidingView} from 'react-native';

function Login(props) {
  const nav = useNavigation();
  const State = useSelector(state => state);
  const [state, setState] = React.useState({
    email: '',
    password: '',
    checked: false,
    loginLoading: false,
  });

  const handleState = data => {
    setState(s => ({...s, ...data}));
  };

  function validations() {
    if (state.email == '') {
      EnableSnackBar({data: 'Email should not be empty'}, false);
    } else {
      if (state.password == '') {
        EnableSnackBar({data: 'Password should not be empty'}, false);
      } else {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (reg.test(state.email) == false) {
          EnableSnackBar({data: 'Email should be in valid format'}, false);
        } else {
          if (state.checked == false) {
            EnableSnackBar(
              {data: 'Please agree to terms and conditions'},
              false,
            );
          } else {
            return true;
          }
        }
      }
    }
  }

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView>
        <ImageBackground
          resizeMode="cover"
          source={require('src/assets/Images/login.jpg')}
          imageStyle={styles.backgroundImage}
          style={{backgroundColor: 'black'}}>
          <View
            style={{
              height: '100%',
              width: '100%',
              // backgroundColor: '#263238',
              // opacity: 0.6,
            }}>
            <View style={{flex: 0.4}} />
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                flex: 0.4,
              }}>
              <View>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: '500',
                    textAlign: 'center',
                    fontSize: 16 * fontRef,
                  }}>
                  Let's Find Your
                </Text>
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    fontSize: 24 * fontRef,
                    fontWeight: '700',
                    marginTop: 10,
                  }}>
                  Dream Product
                </Text>
              </View>
              <View style={{width: '100%', alignItems: 'center'}}>
                <InputField
                  style={styles.feildStyle}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  enableFocus={true}
                  textFieldStyle={{
                    borderWidth: 0,
                    borderBottomWidth: 2,
                    borderColor: 'white',
                  }}
                  placeholderTextColor={globalStyles.Theme.backgroundColor}
                  placeholder="Email"
                  autoComplete="email"
                  title=""
                  titleSize={20 * fontRef}
                  value={state.email}
                  emailValidation={true}
                  returnKeyType={'next'}
                  onChangeText={val => handleState({email: val})}
                />
                <InputField
                  style={styles.passFeildStyle}
                  title=""
                  placeholderTextColor={globalStyles.Theme.backgroundColor}
                  placeholder="Password"
                  textFieldStyle={{
                    borderWidth: 0,
                    borderBottomWidth: 2,
                    borderColor: 'white',
                  }}
                  titleSize={20 * fontRef}
                  enableFocus={true}
                  value={state.password}
                  password={true}
                  emailValidation={false}
                  returnKeyType={'next'}
                  onChangeText={val => handleState({password: val})}
                />
                <TouchableOpacity
                disabled
                  style={{width: '100%'}}
                  onPress={() => nav.navigate('ForgetPassword')}>
                  <Text
                    style={{
                      fontWeight: '400',
                      fontSize: 16 * fontRef,
                      color: 'white',
                      marginTop: -20 * heightRef,
                      marginBottom: 20 * heightRef,
                      marginRight: 20 * heightRef,
                      alignSelf: 'flex-end',
                    }}>
                    {' '}
                  </Text>
                </TouchableOpacity>
                <Button
                  elevation={10}
                  buttonText={'Continue'}
                  buttonHeight={50 * heightRef}
                  titleFontStyle={'600'}
                  titleColor={globalStyles.Theme.primary}
                  titleFontSize={20 * fontRef}
                  buttonWidth={'80%'}
                  isLoading={state.loginLoading}
                  buttonColor={'white'}
                  borderColor={globalStyles.Theme.primary}
                  buttonCorners={25 * heightRef}
                  style={{opacity: 1}}
                  onPress={() => nav.navigate('BottomStack')}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 30 * heightRef,
                  }}>
                  <Text
                    style={{
                      fontWeight: '400',
                      fontSize: 16 * fontRef,
                      color: 'white',
                    }}>
                    New User?{' '}
                  </Text>
                  <TouchableOpacity onPress={() => nav.navigate('Register')} >
                    <Text
                      style={{
                        fontWeight: '700',
                        fontSize: 16 * fontRef,
                        color: 'white',
                      }}>
                      Create an account
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </View>
  );
}

export default Login;
