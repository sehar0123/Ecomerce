import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Image, View} from 'react-native';
import {FlatList, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-dynamic-vector-icons';
import Animated, {FadeOut, ZoomIn} from 'react-native-reanimated';
import {connect} from 'react-redux';
import Button from 'src/components/Button';
import Head from 'src/components/Head';
import Header from 'src/components/Header';
import InputField from 'src/components/inputField';

import globalStyles from 'src/config/globalStyles';
import {heightRef} from 'src/config/screenSize';
import moment from 'moment';
import styles from './style';
import {TouchableOpacity} from 'react-native';
const Message = props => {
  const nav = useNavigation();
  const [search, setSearch] = useState('');
  const [hover, setHover] = useState(true);
  useEffect(() => {}, [
    setTimeout(() => {
      setHover(false);
    }, 4000),
  ]);
  let MSG_DATA = [
    {
      msg: 'Hi,there How are You?',
      time: '3:03 am',
      date: 'today',
      user: 'to',
      title:'Linkin Park',
      image:'https://i.pinimg.com/236x/37/d1/fd/37d1fd68f669e1074c38b4e590af2700.jpg'
    },
    {
      msg: 'hello, its me.',
      time: '3:00 am',
      date: 'today',
      title:'Balmain',
      user: 'to',
      image:'https://i.pinimg.com/564x/b0/f2/38/b0f2389d603d73bd98aa7fd4ae6eb927.jpg'
    },
    {
      msg: 'Hi,there How are You?',
      time: '3:01 am',
      date: 'today',
      user: 'from',
      title:'Santa-Co',
      image:'https://i.pinimg.com/564x/f3/a1/33/f3a1333dfc79eab4147acd9c780b93df.jpg'

    },
    {
      msg: 'Vestibulum eget augue consectetur',
      time: '3:02 am',
      date: 'today',
      title:'Slogan',
      user: 'to',
      image:'https://i.pinimg.com/564x/fc/50/33/fc503307d458c81b3745c531f432bce5.jpg'
    },
   
  ];
  return (
    <View style={styles.container}>
      <Header />
      <Head title={"Chats"}  />
      {/* <Text style={styles.heading}>Chats</Text>
      <View style={styles.headerInner}>
        <Text style={styles.heading2}>Recent chats</Text>
        <Icon
          name={'chevron-small-down'}
          type={'Entypo'}
          size={30}
          color={'#9BAAAF'}
        />
      </View> */}
       <Button
          buttonWidth={40 * heightRef}
          buttonHeight={40 * heightRef}
          buttonText={''}
          isIcon={true}
          iconType={'Entypo'}
          iconName={'plus'}
          iconSize={20}
          buttonCorners={20}
          iconColor={'white'}
          isButtonText={false}
          buttonColor={globalStyles.Theme.red}
          borderColor={globalStyles.Theme.red}
          style={styles.addButton}
          onPress={() => {
            nav.navigate('Chat');
          }}
        />
      <View style={styles.searchView}>
        <InputField
          style={styles.inputFeild}
          keyboardType="email-address"
          autoCapitalize="none"
          enableFocus={true}
          autoComplete="email"
          title=""
          titleSize={15}
          placeholder={'Search'}
          value={search}
          emailValidation={true}
          backgroundColor={'transparent'}
          borderColor={'transparent'}
          onChangeText={val => setSearch(val)}
        />
        <Button
          buttonWidth={20}
          buttonHeight={30}
          buttonText={''}
          isIcon={true}
          iconName={'search1'}
          iconSize={18}
          iconColor={'#DBE0EB'}
          isButtonText={false}
          buttonColor={'#FFFFFF'}
          borderColor={'#FFFFFF'}
          style={{marginLeft: 10, position: 'absolute'}}
        />
      </View>
      <FlatList
        data={MSG_DATA}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={{width: '100%', marginVertical: 20}}
        contentContainerStyle={styles.flatlistContainerStyle}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity style={styles.listView} onPress={() => {
              nav.navigate('Chat');
            }} >
              <View style={styles.main}>
                <View style={styles.topView}>
                  <Image
                    style={styles.imgView}
                    resizeMode={'cover'}
                    source={{uri:item.image}}
                  />
                  <View style={styles.AvailabilityView}>
                    <View
                      style={[
                        styles.AvailabilityInnerView,
                        {
                          backgroundColor: 'green',
                        },
                      ]}
                    />
                  </View>
                </View>
                <View
                  style={{
                    marginLeft: 20,
                  }}>
                  <Text style={styles.name}>{item.title}</Text>
                  <Text
                    style={[
                      styles.status,
                      {
                        color: globalStyles.Theme.primary,
                      },
                    ]}>
                    {item.time}
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                  }}>
                  <Text style={styles.timeText}>{'2 min ago'}</Text>
                </View>
              </View>
              <View style={styles.bottomView}>
                <View style={styles.msgbox}>
                  <Text style={styles.msgText}>{item.msg}</Text>
                </View>
                <View style={styles.countView}>
                  <View style={styles.msgView}>
                    <Text style={{color: 'white'}}>5</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      {/* <View style={styles.addView}>
        {hover ? (
          <Animated.View
            style={styles.addView2}
            entering={ZoomIn.duration(300)}
            exiting={FadeOut.duration(400)}>
            <Text style={styles.addText}>New Chat</Text>
          </Animated.View>
        ) : null}
       
      </View> */}
    </View>
  );
};

export default Message;
