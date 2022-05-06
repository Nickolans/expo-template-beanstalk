import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import LGbuttonStyles from './LGbutton.styles';

const LGbutton = ({ onPress, text, inverted }) => (
  <TouchableOpacity
    activeOpacity={0.7}
    onPress={onPress}
    style={!inverted ? LGbuttonStyles.button : LGbuttonStyles.buttonInverted}
  >
    <Text style={!inverted ? LGbuttonStyles.text : LGbuttonStyles.textInverted}>
      {text}
    </Text>
  </TouchableOpacity>
);

export default LGbutton;
