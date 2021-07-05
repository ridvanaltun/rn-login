import React from 'react';
import {Text, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import {Theme, Fonts} from '../constants';

const LinkButton = ({title, style, ...props}) => {
  return (
    <TouchableWithoutFeedback {...props}>
      <Text style={{...styles.linkTxt, ...style}}>{title}</Text>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  linkTxt: {
    fontFamily: Fonts.CIRCULAR_STD.Medium,
    fontSize: 12,
    lineHeight: 18,
    fontWeight: 'bold',
    color: Theme.COLORS.BRIGHT_BLUE,
  },
});

export default LinkButton;
