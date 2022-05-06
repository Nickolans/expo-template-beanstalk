import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  center: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },

  googleText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: '700',
  },

  GoogleButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#848496',
  },
});

export default styles;
