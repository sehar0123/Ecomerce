import React from 'react';
import {View as RNView, ViewProps} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import globalStyles from 'src/config/globalStyles';
import View from '../View';

const Header = ({color = globalStyles.Theme.white, ...props}) => {
  const inset = useSafeAreaInsets();
  return (
    <View>
      <View
        style={{
          height: inset.top,
          width: '100%',
          backgroundColor: color,
        }}
      />
    </View>
  );
};

export default Header;
