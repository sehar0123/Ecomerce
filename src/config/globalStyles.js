import {heightRef, widthRef} from './screenSize';
import {useState} from 'react';
import {EventRegister} from 'react-native-event-listeners';
const {StyleSheet} = require('react-native');

export const MEDIA_HEIGHT = 295 * heightRef;
const globalStyles = {
  Theme: {
    backgroundColor: '#FFFFFF',
    primary: '#F5646B',
    black: '#263238',
    orange: '#FF4500',
red:'#C53F3F',
    navy: '#263238',
    darkGray: '#626262',
    lightGray: '#D7D7D7',
    grey: '#C4C4C4',
    lightpink:'#FFFAFA'
  },
font: {
    fontFamily:'Quicksand-Regular',
    fontfmailyBold:'Quicksand-Bold',
    fontFamilySemiBold:'Quicksand-SemiBold'
  },
};
export default globalStyles;
