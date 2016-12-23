import React, { Component, PropTypes } from 'react';
import { View, Text, TextInput, TouchableHighlight, Alert, Image } from 'react-native';
import styles from '../styles/styles';


const AddChildForm = ({name, age, onSubmit, onChangeName, onChangeAge, back}) => (
        <View>
          <Image
             style={{width: 300, height: 100, alignSelf: 'center'}}
             source={require('../../images/earnit-01.png')}/>
           <TextInput placeholder="Name"
               value={name}
               onChangeText={onChangeName}
               />
             <TextInput placeholder="Age" keyboardType="numeric"
               value={age}
               onChangeText={onChangeAge}
              />
               <TouchableHighlight style={styles.button} onPress={onSubmit}>
                 <Text style={styles.buttonText}>ADD CHILD</Text>
               </TouchableHighlight>
               <TouchableHighlight style={[styles.button, styles.cancelButton]} onPress={back}>
                 <Text style={styles.buttonText}> {'<'} CANCEL</Text>
               </TouchableHighlight>
        </View>
);

// AddChildForm.PropTypes = {
//   back: PropTypes.func.isRequired,
//   name: PropTypes.string.isRequired,
//   age: PropTypes.string.isRequired,
//   onSubmit: PropTypes.func.isRequired,
//   onChangeName: PropTypes.func.isRequired,
//   onChangeAge: PropTypes.func.isRequired,
// };

export default AddChildForm;
