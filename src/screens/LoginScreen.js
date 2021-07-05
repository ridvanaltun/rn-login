import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  PrimaryButton,
  RadioButton,
  LinkButton,
  FloatingLabelInput,
} from '../components';
import {Fonts, Theme} from '../constants';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const _onChangeUsername = newUsername => {
    setUsername(newUsername);
  };

  const _onChangePassword = newPassword => {
    setPassword(newPassword);
  };

  const _onRememberMePress = () => {
    setRememberMe(!rememberMe);
  };

  const _onSignupPress = () => {
    navigation.navigate('Introduction');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Glad to see you!</Text>
      <View style={styles.loginForm}>
        <FloatingLabelInput
          label="Username"
          value={username}
          onChangeText={_onChangeUsername}
          autoFocus
        />
        <FloatingLabelInput
          label="Password"
          value={password}
          containerStyle={styles.passwordTxt}
          onChangeText={_onChangePassword}
          secureTextEntry
        />
        <View style={styles.loginUtils}>
          <RadioButton onPress={_onRememberMePress} selected={rememberMe}>
            Remember Me
          </RadioButton>
          <LinkButton title="Forgot password?" />
        </View>
      </View>
      <View style={styles.bottom}>
        <PrimaryButton title="LOGIN" />
        <View style={styles.bottomText}>
          <Text style={styles.newUserTxt}>New user?</Text>
          <LinkButton
            style={styles.signupTxt}
            title="Signup"
            onPress={_onSignupPress}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Theme.COLORS.LIGHT_GRAY,
  },
  title: {
    width: '100%',
    textAlign: 'left',
    fontFamily: Fonts.CIRCULAR_STD.Bold,
    color: Theme.COLORS.BRIGHT_BLUE,
    fontSize: 32,
    lineHeight: 36,
    paddingLeft: 30,
    marginTop: 43,
    marginBottom: 40,
  },
  loginForm: {
    width: '100%',
    paddingHorizontal: 30,
  },
  passwordTxt: {
    marginTop: 20,
  },
  loginUtils: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  bottom: {
    flex: 0.5,
    width: '100%',
    alignItems: 'center',
    marginTop: 40,
  },
  bottomText: {
    flexDirection: 'row',
    marginTop: 15,
  },
  newUserTxt: {
    fontFamily: Fonts.CIRCULAR_STD.Medium,
    color: Theme.COLORS.DARK_GRAYISH_BLUE,
    opacity: 0.45,
  },
  signupTxt: {
    paddingLeft: 5,
  },
});

export default LoginScreen;
