import React from 'react';
import {StyleSheet} from 'react-native';
import {Theme} from '../constants';
import {HeaderBackButton} from '@react-navigation/stack';

const HeaderBackButtonInstance = ({style, ...props}) => {
  return (
    <HeaderBackButton
      {...props}
      tintColor={Theme.COLORS.DARK_GRAYISH_BLUE}
      style={{...style, ...styles.custom}}
    />
  );
};

const styles = StyleSheet.create({
  custom: {
    marginLeft: 30,
    opacity: 0.45,
  },
});

export default HeaderBackButtonInstance;
