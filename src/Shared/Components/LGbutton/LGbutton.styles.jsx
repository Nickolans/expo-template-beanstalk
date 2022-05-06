import { StyleSheet } from 'react-native';

/* StyleSheet Commponent object with Pressable and Text component styling */
const LGbuttonStyles = StyleSheet.create({
  button: {
    borderStyle: 'solid',
    marginTop: 5,
    marginBottom: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 6,
    width: '100%',
    height: 52,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
  buttonInverted: {
    marginTop: 5,
    marginBottom: 5,
    borderStyle: 'solid',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 6,
    width: '100%',
    height: 52,
    borderWidth: 3,
    borderColor: 'black',
  },
  textInverted: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default LGbuttonStyles;
