import React from 'react';
import { useNavigate } from 'react-router-native';

// COMPONENTS
import { View, Text } from 'react-native';
import Input from '../../../Shared/Components/Input/Input';
import LGbutton from '../../../Shared/Components/LGbutton/LGbutton';

// STYLES
import styles from './ForgotPassword.styles';

const VerifyEmail = () => {
  const navigate = useNavigate();
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Password Reset</Text>
        </View>
        <Text style={styles.bodyText}>
          Please enter the number we sent to your email account.
        </Text>
        <Input label="Code" />
        <View style={{ width: 343 }}>
          <LGbutton
            text="NEXT"
            onPress={() => {
              navigate('/resetPassword');
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default VerifyEmail;
