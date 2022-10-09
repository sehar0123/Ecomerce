import View from 'src/components/View';
import React from 'react';
import {Text} from 'react-native';
import Icon from 'react-native-dynamic-vector-icons';
import styles from './style';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';
import {fontRef, heightRef} from 'src/config/screenSize';
import {useSelector} from 'react-redux';
import globalStyles from 'src/config/globalStyles';
const Head = ({back = false, route, title,left=false}) => {
  const nav = useNavigation();
  const state = useSelector(state => state);
  return (
    <View style={styles.header}>
      <View style={styles.headerInner}>
      {left? ( <TouchableOpacity
          onPress={() => {
            nav.toggleDrawer();
          }}>
        <Icon
            name={'angle-left'}
            type={'FontAwesome'}
            size={45 * fontRef}
            color={globalStyles.Theme.backgroundColor}
            onPress={() => {
              nav.goBack();
            }}
            style={{alignSelf: 'center',marginTop:5*heightRef}}
          />
        </TouchableOpacity>):null} 
        <Text style={[styles.headerText]}>{title}</Text>
      </View>
      {back ? (
        <TouchableOpacity
          style={styles.border}
          onPress={() => {
            route ? nav.replace(route) : nav.goBack();
          }}>
          <Icon
            name={'delete'}
            type={'AntDesign'}
            size={25 * fontRef}
            color={globalStyles.Theme.backgroundColor}
            style={{alignSelf: 'center'}}
            onPress={() => {
              nav.goBack();
            }}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};
export default Head;
