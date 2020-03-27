import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import Game from './Game';
import Bodytext from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/colors';
import MainButton from '../components/MainButton';

const GameOver = props => {
  return (
    <View style={styles.screen}>
      <TitleText>Game Over</TitleText>
      <View style={styles.imageContainer} >
        <Image 
          source={require('../assets/success.png')} 
          style={styles.image} 
          resizeMode='cover'
        />
      </View>
      <View style={styles.resultContainer}>
        <Bodytext style={styles.resultText}>
          Number of rounds - <Text style={styles.highlight}>{props.numRounds}</Text>
        </Bodytext>
        <Bodytext style={styles.resultText}>
          Your Number Was - <Text style={styles.highlight}>{props.userNumber}</Text>
        </Bodytext>
      </View>
      <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 200, 
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    margin: 30, 
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: 15
  },
  highlight: {
    color: Colors.primary,
    fontFamily: 'open-sans-bold', 
  },
  resultText: {
    textAlign: 'center',
    fontSize: 20,
  },
});

export default GameOver;