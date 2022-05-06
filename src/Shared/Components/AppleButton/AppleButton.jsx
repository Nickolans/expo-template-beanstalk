import React from 'react';
import { AppleButton } from '@invertase/react-native-apple-authentication';
import useThirdPartyAuth from '../../Hooks/thirdPartyAuth.hook';

const AppleSignInButton = () => {
  const thirdPartyAuth = useThirdPartyAuth();

  return (
    <AppleButton
      onPress={() => thirdPartyAuth.handleAppleSignIn()}
      buttonStyle={AppleButton.Style.BLACK}
      buttonType={AppleButton.Type.SIGN_IN}
      style={{
        width: '100%',
        height: 50,
      }}
    />
  );
};

export default AppleSignInButton;
