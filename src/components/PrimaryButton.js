import React from 'react';
import {TouchableHighlight, Text, StyleSheet} from 'react-native';
import {Theme, Fonts} from '../constants';

const PrimaryButton = ({title, ...props}) => {
  return (
    <TouchableHighlight style={styles.button} {...props}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    borderRadius: 6,
    backgroundColor: Theme.COLORS.BRIGHT_BLUE,
  },
  buttonText: {
    color: Theme.COLORS.WHITE,
    fontFamily: Fonts.CIRCULAR_STD.BOLD,
    fontSize: 14,
    lineHeight: 12,
    paddingVertical: 19,
  },
});

export default PrimaryButton;
