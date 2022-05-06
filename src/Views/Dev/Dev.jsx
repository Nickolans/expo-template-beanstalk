import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/**
 * View used for testing components.
 */
const Dev = () => (
  <View style={styles.container}>
    <Text>Build & Test here - /src/Views/Dev/Dev.jsx</Text>
  </View>
);

export default Dev;
