import React from 'react';
import { useNavigate } from 'react-router-native';

// COMPONENTS
import { View, Text } from 'react-native';
import Input from '../../../Shared/Components/Input/Input';
import LGbutton from '../../../Shared/Components/LGbutton/LGbutton';

// STYLES
import styles from './ForgotPassword.styles';

const ResetPassword = () => {
  const navigate = useNavigate();
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Password Reset</Text>
      </View>
      <Input label="Enter New Password" />
      <Input label="Comfirm New Password" />
      <View style={{ width: 343 }}>
        <LGbutton
          text="SUBMIT"
          onPress={() => {
            navigate('/login');
          }}
        />
      </View>
    </View>
  );
};

export default ResetPassword;
