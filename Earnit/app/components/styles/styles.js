import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
  button: {
    height: 45,
    alignSelf: 'stretch',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#11aac1',
    marginLeft: 10,
    marginRight: 10,
  },
  cancelButton: {
    backgroundColor: '#666',
  },
  childButton: {
    backgroundColor: '#757575',
    borderColor: '#000',
    borderWidth: 1
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FAFAFA',
    textAlign: 'center',
  },
  ViewContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },
});
