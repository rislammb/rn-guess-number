import React from 'react';
import { StyleSheet } from 'react-native';

import CustomInput from './CustomInput';

const Input = (props) => {
  return <CustomInput {...props} style={{ ...styles.input, ...props.style }} />;
};

export default Input;

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 12,
    fontSize: 20,
  },
});
