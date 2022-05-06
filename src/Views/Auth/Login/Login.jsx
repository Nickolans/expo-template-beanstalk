import React, { useState } from 'react';
import { useNavigate } from 'react-router-native';
import { View, Text, TouchableHighlight } from 'react-native';
import {
  useRedirectLoggedIn,
  login,
} from '../../../Shared/Services/auth.service';
import Input from '../../../Shared/Components/Input/Input';
import LGButton from '../../../Shared/Components/LGbutton/LGbutton';
import styles from './Login.styles';
import GoogleSignInButton from '../../../Shared/Components/GoogleButton/GoogleButton';
import AppleSignInButton from '../../../Shared/Components/AppleButton/AppleButton';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setUser } = useRedirectLoggedIn(navigate);

  const handleSubmit = async () => {
    try {
      const loggedIn = await login({ email, password });
      setUser(loggedIn);
    } catch (e) {
      setPassword('');
    }
  };

  return (
    <>
      <View style={styles.innerContainer}>
        <Text style={styles.text}>Log in</Text>
        <Input label="Email" value={email} setValue={setEmail} />
        <Input
          label="Password"
          secure
          value={password}
          setValue={setPassword}
        />
        <TouchableHighlight onPress={() => navigate('/forgotpassword')}>
          <View style={styles.forgotPasswordText}>
            <Text>Forgot Password</Text>
          </View>
        </TouchableHighlight>
        <LGButton text="LOG IN" onPress={handleSubmit} />
        <View style={{ paddingTop: '10%' }}>
          <AppleSignInButton />
          <GoogleSignInButton />
        </View>
      </View>
    </>
  );
};

export default Login;
