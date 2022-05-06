import React, { useState } from 'react';
import { useNavigate } from 'react-router-native';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {
  useRedirectLoggedIn,
  register,
} from '../../../Shared/Services/auth.service';
import Input from '../../../Shared/Components/Input/Input';
import LGbutton from '../../../Shared/Components/LGbutton/LGbutton';
import styles from './SignUp.styles';
import GoogleSignInButton from '../../../Shared/Components/GoogleButton/GoogleButton';
import AppleSignInButton from '../../../Shared/Components/AppleButton/AppleButton';

const SignUp = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setUser } = useRedirectLoggedIn(navigate);

  const handleSubmit = async () => {
    try {
      const loggedIn = await register({
        firstName,
        lastName,
        email,
        password,
      });
      setUser(loggedIn);
    } catch (e) {
      setPassword('');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.innerContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Sign Up</Text>
        </View>
        <Input label="first name" value={firstName} setValue={setFirstName} />
        <Input label="last name" value={lastName} setValue={setLastName} />
        <Input label="email" value={email} setValue={setEmail} />
        <Input label="password" value={password} setValue={setPassword} />
        <View style={styles.LGbuttonContainer}>
          <LGbutton inverted={false} text="SIGN UP" onPress={handleSubmit} />
        </View>
        <View style={styles.LGbuttonContainer}>
          <AppleSignInButton />
          <GoogleSignInButton />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignUp;
