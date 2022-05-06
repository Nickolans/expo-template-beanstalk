import React from 'react';
import { useNavigate } from 'react-router-native';
import {
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from 'react-native';
import BackButtonNavHeader from '../Shared/Components/BackButtonNavHeader/BackButtonNavHeader';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '100%',
  },
  backButtonContainer: {},
});

const BackButtonHeaderLayout = ({ children }) => {
  const navigate = useNavigate();
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <SafeAreaView style={styles.backButtonContainer}>
        <BackButtonNavHeader onPress={() => navigate(-1)} />
      </SafeAreaView>
      {children}
    </KeyboardAvoidingView>
  );
};

export default BackButtonHeaderLayout;
