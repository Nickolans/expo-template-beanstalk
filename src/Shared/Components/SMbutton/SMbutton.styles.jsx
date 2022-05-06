import { StyleSheet } from 'react-native';

const SMbuttonStyles = StyleSheet.create({
  parentContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: 15,
    width: '45%',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderWidth: 5,
    borderRadius: 6,
    borderStyle: 'solid',
  },
  containerBackground: {
    backgroundColor: 'black',
  },
  containerBackgroundInverted: {
    backgroundColor: 'white',
  },
  text: {
    margin: 20,
    fontWeight: 'bold',
  },
  textColor: {
    color: 'white',
  },
  textColorInverted: {
    color: 'black',
  },
});

export default SMbuttonStyles;
