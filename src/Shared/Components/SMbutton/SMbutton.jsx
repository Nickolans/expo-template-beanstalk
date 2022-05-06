import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// STYLES
import SMbuttonStyles from './SMbutton.styles';

/**
 *
 * @param {String} text
 * @param {function} onPress
 * @param {Boolean} inverted
 * @returns
 */
const SMbutton = ({ text, onPress, inverted }) => (
  <View style={SMbuttonStyles.parentContainer}>
    <TouchableOpacity
      onPress={onPress}
        // Style will change based off inversion
      style={[
        SMbuttonStyles.container,
        inverted
          ? SMbuttonStyles.containerBackgroundInverted
          : SMbuttonStyles.containerBackground,
      ]}
    >
      <Text
          // Style will change based off inversion
        style={[
          SMbuttonStyles.text,
          inverted
            ? SMbuttonStyles.textColorInverted
            : SMbuttonStyles.textColor,
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  </View>
);

export default SMbutton;
