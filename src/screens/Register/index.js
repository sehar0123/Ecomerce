import React, {useEffect, useState} from 'react';
import {Image, ImageBackground, StyleSheet, Text} from 'react-native';
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

function Register(props) {
  const nav = useNavigation();
  const State = useSelector(state => state);
  const [state, setState] = React.useState({
    email: '',
    password: '',
    checked: false,
    loginLoading: false,
    phone:'',
    name:''
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
          source={{uri:'https://images.pexels.com/photos/3161178/pexels-photo-3161178.jpeg?auto=compress&cs=tinysrgb&w=600'}}
          imageStyle={styles.backgroundImage}
          style={{backgroundColor: 'black'}}>
          <View
            style={{
              height: '100%',
              width: '100%',
              // backgroundColor: '#263238',
              // opacity: 0.6,
            }}>
            <Button
              elevation={10}
              buttonText={''}
              titleColor={globalStyles.Theme.primary}
              isIcon={true}
              iconColor={globalStyles.Theme.backgroundColor}
              buttonHeight={55 * heightRef}
              titleFontStyle={'600'}
              iconSize={30}
              titleFontSize={17 * fontRef}
              buttonWidth={55 * heightRef}
              iconType="AntDesign"
              iconName="left"
              buttonColor={globalStyles.Theme.primary}
              borderColor={globalStyles.Theme.primary}
              buttonCorners={25}
              style={{position: 'absolute', left: 20, top: 40}}
              onPress={() => nav.goBack()}
            />
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
                  placeholder="Name"
                  autoComplete="email"
                  title=""
                  titleSize={20 * fontRef}
                  value={state.name}
                  emailValidation={true}
                  returnKeyType={'next'}
                  onChangeText={val => handleState({name: val})}
                />
                <InputField
                  style={styles.passFeildStyle}
                  title=""
                  placeholderTextColor={globalStyles.Theme.backgroundColor}
                  placeholder="Email"
                  textFieldStyle={{
                    borderWidth: 0,
                    borderBottomWidth: 2,
                    borderColor: 'white',
                  }}
                  titleSize={20 * fontRef}
                  enableFocus={true}
                  value={state.email}
                  emailValidation={false}
                  returnKeyType={'next'}
                  onChangeText={val => handleState({email: val})}
                />
                <InputField
                  style={styles.passFeildStyle}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  enableFocus={true}
                  textFieldStyle={{
                    borderWidth: 0,
                    borderBottomWidth: 2,
                    borderColor: 'white',
                  }}
                  placeholderTextColor={globalStyles.Theme.backgroundColor}
                  placeholder="Phone No"
                  autoComplete="email"
                  title=""
                  titleSize={20 * fontRef}
                  value={state.phone}
                  emailValidation={true}
                  returnKeyType={'next'}
                  onChangeText={val => handleState({phone: val})}
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
                <Button
                  elevation={10}
                  buttonText={'Register'}
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
              </View>
            </View>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </View>
  );
}

export default Register;
