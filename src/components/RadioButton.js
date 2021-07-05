import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Theme} from '../constants';

const RadioButton = ({onPress, selected, children}) => {
  return (
    <View style={styles.radioButtonContainer}>
      <TouchableOpacity onPress={onPress} style={styles.radioButton}>
        {selected ? <View style={styles.radioButtonIcon} /> : null}
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.radioButtonText}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 45,
  },
  radioButton: {
    height: 20,
    width: 20,
    backgroundColor: Theme.COLORS.LIGHT_GRAY,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Theme.COLORS.GRAYISH_BLUE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonIcon: {
    height: 14,
    width: 14,
    borderRadius: 7,
    backgroundColor: Theme.COLORS.LIME_GREEN,
  },
  radioButtonText: {
    fontSize: 12,
    marginLeft: 6,
    color: Theme.COLORS.DARK_GRAYISH_BLUE,
  },
});

export default RadioButton;
