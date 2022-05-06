import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

// STYLES
import Styles from './BackButtonNavHeader.styles';

// Component
const BackButtonNavHeader = ({ onPress }) => (
  <View style={Styles.box}>
    <TouchableOpacity onPress={onPress} style={Styles.touchable}>
      <AntDesign name="left" size={26} color="black" />
    </TouchableOpacity>
  </View>
);

export default BackButtonNavHeader;
