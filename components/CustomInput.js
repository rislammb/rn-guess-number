import React from 'react';
import { useFonts } from '@use-expo/font';
import { TextInput, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';

export default (props) => {
  let [fontsLoaded] = useFonts({
    'TitilliumWeb-Regular': require('../assets/fonts/TitilliumWeb-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <TextInput
        {...props}
        style={{
          ...styles.input,
          ...props.style,
        }}
      />
    );
  }
};

const styles = StyleSheet.create({
  input: {
    fontFamily: 'TitilliumWeb-Regular',
    fontSize: 16,
  },
});
