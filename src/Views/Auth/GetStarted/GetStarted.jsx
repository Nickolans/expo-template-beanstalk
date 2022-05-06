import React from 'react';
import { useNavigate } from 'react-router-native';
import { StyleSheet, View, Text } from 'react-native';
import LGbutton from '../../../Shared/Components/LGbutton/LGbutton';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '95%',
    // backgroundColor: 'red',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
  },
});

const GetStarted = () => {
  const navigate = useNavigate();

  return (
    <View style={{ ...styles.container }}>
      {/* Buffer View */}
      <View />
      {/* Title text */}
      <View style={{ display: 'flex', alignItems: 'center' }}>
        <Text style={{ fontSize: 50, textAlign: 'center' }}>Beanstalk</Text>
      </View>
      {/* Get Started bottom button */}
      <View>
        <LGbutton
          text="GET STARTED"
          inverted
          onPress={() => navigate('/welcome', { replace: true })}
        />
      </View>
    </View>
  );
};

export default GetStarted;
