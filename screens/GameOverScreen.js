import React from 'react';
import { StyleSheet, View } from 'react-native';

import Text from '../components/CustomText';
import Button from '../components/CustomButton';
import Card from '../components/Card';
import Colors from '../constants/colors';

const GameOverScreen = ({ roundsNumber, userNumber, onRestart }) => {
  return (
    <View style={styles.screen}>
      <Card style={styles.card}>
        <Text>The Game is Over!</Text>
        <Text>Number of rounds: {roundsNumber}</Text>
        <Text>Number was: {userNumber}</Text>
        <View style={styles.button}>
          <Button color={Colors.primary} title='New game' onPress={onRestart} />
        </View>
      </Card>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 70,
    alignItems: 'center',
  },
  card: {
    alignItems: 'center',
  },
  button: {
    marginTop: 20,
  },
});
