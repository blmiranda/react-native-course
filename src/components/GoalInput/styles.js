import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  inputContainer: {
    backgroundColor: '#651fff',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margingBottom: 24,
    padding: 16,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    width: '100%',
    padding: 8,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
  },
  buttonsContainer: {
    width: '100%',
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 25,
  },
  buttons: {
    width: '40%',
  },
});
