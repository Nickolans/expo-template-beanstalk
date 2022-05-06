import React from 'react';
import { useNavigate } from 'react-router-native';

// COMPONENTS
import { View, Text } from 'react-native';
import Input from '../../../Shared/Components/Input/Input';
import LGbutton from '../../../Shared/Components/LGbutton/LGbutton';

// STYLES
import styles from './ForgotPassword.styles';

const ForgotPassword = () => {
  const navigate = useNavigate();
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Password Reset</Text>
      </View>
      <Text style={styles.bodyText}>
        Please enter your email associated with your account.
      </Text>
      <Input label="Email" />
      <View style={{ width: '100%', padding: 5 }}>
        <LGbutton
          text="NEXT"
          onPress={() => {
            navigate('/verifyEmail');
          }}
        />
      </View>
    </View>
  );
};

export default ForgotPassword;
