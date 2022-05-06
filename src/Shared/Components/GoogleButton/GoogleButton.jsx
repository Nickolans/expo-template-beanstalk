import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import useThirdPartyAuth from '../../Hooks/thirdPartyAuth.hook';
import styles from './GoogleButton.styles';

const GoogleSignInButton = () => {
  const thirdPartyAuth = useThirdPartyAuth();

  return (
    <TouchableOpacity onPress={() => thirdPartyAuth.handleGoogleSignIn()}>
      <View style={styles.GoogleButton}>
        <View style={{ marginRight: 10 }}>
          {/* <Image style={{ height: 20, width: 20 }} source={Google} /> */}
        </View>
        <Text style={styles.googleText}>Sign In with Google</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoogleSignInButton;
