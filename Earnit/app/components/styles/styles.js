import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 12,
    fontSize: 20,
    fontWeight: '900'
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 10
  },
  button: {
    height: 45,
    alignSelf: 'stretch',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#11aac1',
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 2
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
  buttonPoint: {
    height: 30,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#75be79',
    marginRight: 5,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 2
  },
  buttonReward: {
    height: 30,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fabd3a',
    marginRight: 5,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 2
  },
  buttonBack: {
    height: 30,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#666',
    marginRight: 5,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 2
  },
  buttonDelete: {
    height: 30,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d13b2e',
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 2
  },
  smButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FAFAFA',
    textAlign: 'center',
  },
  center: {
    textAlign: 'center',
    color: '#656656'
  },
  name: {
    fontSize: 30,
    fontWeight: '900'
  },
  description: {
    fontSize: 18,
    fontStyle: 'italic'
  },
  points: {
    fontSize: 20,
    fontWeight: '700'
  }
});
