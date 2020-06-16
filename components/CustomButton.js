import React from 'react';
import { useFonts } from '@use-expo/font';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';

export default (props) => {
  let [fontsLoaded] = useFonts({
    'TitilliumWeb-Regular': require('../assets/fonts/TitilliumWeb-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        {...props}
        style={{
          backgroundColor: props.color ? props.color : '#35e',
          paddingVertical: 5,
          paddingHorizontal: 8,
          borderRadius: 2,
          ...props.style,
        }}
      >
        <Text style={styles.button}>{props.title}</Text>
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  button: {
    fontFamily: 'TitilliumWeb-Regular',
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: -0.5,
  },
});
