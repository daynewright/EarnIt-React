import React, { Component, PropTypes } from 'react';
import { View, Text, TextInput, TouchableHighlight, Alert, Image } from 'react-native';
import styles from '../styles/styles';


const AddTaskForm = ({title, description, onSubmit, onChangeTitle, onChangeDescription, back}) => (
        <View>
          <Image
             style={{width: 300, height: 100, alignSelf: 'center'}}
             source={require('../../images/earnit-01.png')}/>
           <TextInput placeholder="Title"
               value={title}
               onChangeText={onChangeTitle}
               />
             <TextInput placeholder="description"
               value={description}
               onChangeText={onChangeDescription}
              />
               <TouchableHighlight style={styles.button} onPress={onSubmit}>
                 <Text style={styles.buttonText}>ADD TASK</Text>
               </TouchableHighlight>
               <TouchableHighlight style={[styles.button, styles.cancelButton]} onPress={back}>
                 <Text style={styles.buttonText}> {'<'} CANCEL</Text>
               </TouchableHighlight>
        </View>
);

AddTaskForm.PropTypes = {
  back: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChangeTitle: PropTypes.func.isRequired,
  onChangeDescription: PropTypes.func.isRequired,
};

export default AddTaskForm;
