import React from 'react';
import { useFonts } from '@use-expo/font';
import { Text } from 'react-native';
import { AppLoading } from 'expo';

export default (props) => {
  let [fontsLoaded] = useFonts({
    'TitilliumWeb-Regular': require('../assets/fonts/TitilliumWeb-Regular.ttf'),
    'TitilliumWeb-Bold': require('../assets/fonts/TitilliumWeb-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Text
        {...props}
        style={{
          fontFamily: props.bold ? 'TitilliumWeb-Bold' : 'TitilliumWeb-Regular',
          fontSize: 16,
          ...props.style,
        }}
      >
        {props.children}
      </Text>
    );
  }
};
