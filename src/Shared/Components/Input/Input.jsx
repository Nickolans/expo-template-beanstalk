import React from 'react';

// STYLES
import { TextInput } from 'react-native';
import Styles from './Input.styles';

// COMPONENTS

const Input = ({
  value, setValue, label, secure,
}) => (
  <TextInput
    style={Styles.input}
    secureTextEntry={secure}
    placeholder={label}
    value={value}
    onChangeText={setValue}
    autoCorrect={false}
  />
);

export default Input;
