import React, { Component, PropTypes } from 'react';
import { View, Text, TextInput, TouchableHighlight, Alert, Image } from 'react-native';
import styles from '../styles/styles';


const AddRewardForm = ({name, description, pointsNeeded, onSubmit, onChangeName, onChangeDescription, onChangePointsNeeded, back}) => (
        <View>
          <Image
             style={{width: 300, height: 100, alignSelf: 'center'}}
             source={require('../../images/earnit-01.png')}/>
           <TextInput placeholder="Title"
               value={name}
               onChangeText={onChangeName}
               />
             <TextInput placeholder="description"
               value={description}
               onChangeText={onChangeDescription}
              />
              <TextInput placeholder="points needed" keyboardType="numeric"
                value={pointsNeeded}
                onChangeText={onChangePointsNeeded}
               />
               <TouchableHighlight style={styles.button} onPress={onSubmit}>
                 <Text style={styles.buttonText}>ADD REWARD</Text>
               </TouchableHighlight>
               <TouchableHighlight style={[styles.button, styles.cancelButton]} onPress={back}>
                 <Text style={styles.buttonText}> {'<'} CANCEL</Text>
               </TouchableHighlight>
        </View>
);

AddRewardForm.PropTypes = {
  back: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  pointsNeeded: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChangeName: PropTypes.func.isRequired,
  onChangeDescription: PropTypes.func.isRequired,
  onChangePointsNeeded: PropTypes.func.isRequired
};

export default AddRewardForm;
