import React, {useEffect, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  Image,
  SectionList,
  KeyboardAvoidingView,
  View,
} from 'react-native';
import styles from './style';
import Icon from 'react-native-dynamic-vector-icons';
import Animated, {FadeIn, FadeOut} from 'react-native-reanimated';
import Button from 'src/components/Button';
import Head from 'src/components/Head';
import Header from 'src/components/Header';
import InputField from 'src/components/inputField';
import globalStyles from 'src/config/globalStyles';
import {fontRef, fullWidth, heightRef, widthRef} from 'src/config/screenSize';
import {Platform} from 'react-native';
import moment from 'moment';

import {TouchableOpacity} from 'react-native';
const Chat = props => {
  const [msg, setmsg] = useState('');
  const [options, setOptions] = useState(false);
  const [block, setBlock] = useState(false);
  const MSG_DATA = [
    {
      title: 'Today',
      data: [
        {
          msg: 'hello, its me.',
          time: '3:00 am',
          date: '2 days ago',
          user: 'to',
        },
        {
          msg: 'Hi,there How are You?',
          time: '3:01 am',
          date: '2 days ago',
          user: 'from',
        },
        {
          msg: 'Hi,there How are You?',
          time: '3:02 am',
          date: '2 days ago',
          user: 'to',
        },
      ],
    },
    {
      title: '2 days ago',
      data: [
        {
          msg: 'Hi,there How are You?',
          time: '3:03 am',
          date: 'today',
          user: 'to',
        },
        {
          msg: 'hello, its me.',
          time: '3:00 am',
          date: 'today',
          user: 'to',
        },
        {
          msg: 'Hi,there How are You?',
          time: '3:01 am',
          date: 'today',
          user: 'from',
        },
        {
          msg: 'Hi,there How are You?',
          time: '3:02 am',
          date: 'today',
          user: 'to',
        },
        {
          msg: 'Hi,there How are You?',
          time: '3:03 am',
          date: 'today',
          user: 'to',
        },
        {
          msg: 'Hi,there How are You?',
          time: '3:02 am',
          date: 'today',
          user: 'to',
        },
        {
          msg: 'Hi,there How are You?',
          time: '3:01 am',
          date: 'today',
          user: 'from',
        },
        {
          msg: 'Hi,there How are You?',
          time: '3:02 am',
          date: 'today',
          user: 'to',
        },
      ],
    },
  ];
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS == 'ios' ? 'padding' : null}>
      <View style={styles.container}>
        <View style={{height: '85%'}}>
          <Header />
          {/* <Head back={true} /> */}

          <View style={styles.profileView}>
            <View style={styles.headerInner}>
              <Image
                style={styles.imageView}
                resizeMode={'cover'}
                source={{uri:'https://i.pinimg.com/236x/37/d1/fd/37d1fd68f669e1074c38b4e590af2700.jpg'}}
              />
              <View>
                <Text style={styles.name}>{'Linkin Park'}</Text>
                <Text style={styles.label}>{'Awesome Shoes'}</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={{
                  marginRight: 5 * widthRef,

                  width: 30 * widthRef,
                  alignItems: 'center',
                }}
                onPress={() => {
                  setBlock(!block);
                }}>
                <Icon
                  name={'dots-three-vertical'}
                  type={'Entypo'}
                  size={25 * heightRef}
                  color={'#81878E'}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.LineFull} />

          <SectionList
            sections={MSG_DATA}
            // // stickySectionHeadersEnabled
            inverted
            // // invertStickyHeaders
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            renderSectionFooter={({section: {title}}) => (
              <View style={styles.sectionView}>
                <View style={styles.sectionLine} />
                <Text style={styles.sectionText}>{title}</Text>
                <View style={styles.sectionLine} />
              </View>
            )}
            renderItem={({item, index}) => {
              return (
                <View style={styles.messageView}>
                  <View
                    style={{
                      flexDirection: 'row',
                      width: '100%',
                      justifyContent:
                        item.user == 'from' ? 'flex-start' : 'flex-end',
                    }}>
                    <View
                      style={{
                        backgroundColor:
                          item.user == 'to'
                            ? globalStyles.Theme.primary
                            : '#F0F0F0',
                        maxHeight: '100%',
                        maxWidth: '60%',
                        marginBottom: 5,
                        padding: 10,
                        borderBottomEndRadius: item.user == 'to' ? 0 : 10,
                        borderTopEndRadius: 10,
                        borderBottomStartRadius: 10,
                        borderTopStartRadius: item.user == 'from' ? 0 : 10,
                        marginLeft: 20,
                        marginRight: 10,
                        borderWidth: item.user == 'to' ? 0.25 : 0,
                        borderColor: 'gray',
                      }}>
                      <Text
                        style={[
                          styles.messageText,
                          {
                            color: item.user == 'from' ? '#454238' : 'white',
                          },
                        ]}>
                        {item.msg}
                      </Text>
                    </View>
                    {item.user == 'to' ? (
                      <Image
                        source={
                          item.user == 'from'
                            ? require('src/assets/Images/send.png')
                            : require('src/assets/Images/Seen.png')
                        }
                        style={[
                          styles.tickImage,
                          {
                            tintColor: item.user == 'from' ? '#ADD8E6' : null,
                          },
                        ]}
                        resizeMode={'contain'}
                      />
                    ) : null}
                  </View>
                  {/* {JSON.parse(item).sender == props.auth.userId ? ( */}
                  <Text
                    style={[
                      styles.messageTime,
                      {
                        alignSelf:
                          item.user == 'to' ? 'flex-end' : 'flex-start',
                      },
                    ]}>
                    {item.time}
                  </Text>
                  {/* ) : null} */}
                </View>
              );
            }}
          />

          {options ? (
            <Animated.View
              entering={FadeIn}
              exiting={FadeOut}
              style={styles.selectionView}>
              <Button
                buttonWidth={40 * heightRef}
                buttonHeight={40 * heightRef}
                buttonText={''}
                isIcon={true}
                iconType={'FontAwesome5'}
                iconName={'photo-video'}
                iconSize={18 * heightRef}
                buttonCorners={35}
                iconColor={'white'}
                isButtonText={false}
                buttonColor={globalStyles.Theme.primary}
                borderColor={globalStyles.Theme.primary}
                style={styles.selectionButton}
              />
              <Button
                buttonWidth={40 * heightRef}
                buttonHeight={40 * heightRef}
                buttonText={''}
                isIcon={true}
                iconType={'EvilIcons'}
                iconName={'image'}
                iconSize={30 * heightRef}
                buttonCorners={35}
                iconColor={'white'}
                isButtonText={false}
                buttonColor={globalStyles.Theme.primary}
                borderColor={globalStyles.Theme.primary}
                style={styles.selectionButton}
              />
              <Button
                buttonWidth={40 * heightRef}
                buttonHeight={40 * heightRef}
                buttonText={''}
                isIcon={true}
                iconType={'SimpleLineIcons'}
                iconName={'doc'}
                iconSize={20 * heightRef}
                buttonCorners={35}
                iconColor={'white'}
                isButtonText={false}
                buttonColor={globalStyles.Theme.primary}
                borderColor={globalStyles.Theme.primary}
                style={styles.selectionButton}
              />
            </Animated.View>
          ) : null}
        </View>
        <View style={styles.LineFull} />
        <View style={styles.inputView}>
          <Button
            buttonWidth={44 * heightRef}
            buttonHeight={44 * heightRef}
            buttonText={''}
            isIcon={true}
            iconType={'Entypo'}
            iconName={options ? 'cross' : 'plus'}
            iconSize={35 * heightRef}
            buttonCorners={35}
            iconColor={'white'}
            isButtonText={false}
            buttonColor={globalStyles.Theme.primary}
            borderColor={globalStyles.Theme.primary}
            style={styles.button}
            onPress={() => {
              setOptions(!options);
            }}
          />
          <InputField
            style={styles.inputFeild}
            keyboardType="email-address"
            autoCapitalize="none"
            enableFocus={true}
            autoComplete="email"
            title=""
            titleSize={15}
            placeholder={'Type your message here'}
            value={msg}
            emailValidation={true}
            backgroundColor={'transparent'}
            borderColor={'transparent'}
            onChangeText={val => setmsg(val)}
            textFieldStyle={styles.textInput}
          />
          <Button
            buttonWidth={44 * heightRef}
            buttonHeight={44 * heightRef}
            buttonText={''}
            isIcon={true}
            iconType={'EvilIcons'}
            iconName={'sc-telegram'}
            iconSize={35 * heightRef}
            buttonCorners={35}
            iconColor={'white'}
            isButtonText={false}
            buttonColor={globalStyles.Theme.primary}
            borderColor={globalStyles.Theme.primary}
            style={styles.button}
            onPress={() => {
              setmsg('');
            }}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Chat;
