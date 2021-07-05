import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Text} from 'react-native';
import {Theme, Fonts} from '../constants';

const FloatingLabelInput = ({label, value, innerRef, ...props}) => {
  const [isFocused, setIsFocus] = useState(false);

  const _handleFocus = () => setIsFocus(true);
  const _handleBlur = () => setIsFocus(false);

  const labelStyle = {
    position: 'absolute',
    left: 0,
    top: value || isFocused ? -10 : 24,
    fontSize: 12,
    color:
      value || isFocused
        ? Theme.COLORS.DARK_GRAYISH_BLUE
        : Theme.COLORS.GRAYISH_BLUE,
  };

  return (
    <View style={props.containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        {...props}
        ref={innerRef}
        value={value}
        style={[
          styles.input,
          {
            borderColor: isFocused
              ? Theme.COLORS.LIME_GREEN
              : Theme.COLORS.LIGHT_GRAYISH_BLUE,
            borderBottomWidth: isFocused ? 2 : 0.5,
          },
          props.style,
        ]}
        onFocus={_handleFocus}
        onBlur={_handleBlur}
        blurOnSubmit
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontFamily: Fonts.CIRCULAR_STD.Medium,
    color: Theme.COLORS.DARK_BLUE,
    height: 60,
    fontSize: 18,
    lineHeight: 24,
  },
});

export default FloatingLabelInput;
