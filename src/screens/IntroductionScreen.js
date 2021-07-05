import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Theme, Fonts} from '../constants';
import {PrimaryButton, IntroSlider} from '../components';
import HomeImage from '../assets/images/home.png';

const IntroductionScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.header, styles.title]}>Create an account</Text>
      <Text style={[styles.header, styles.subTitle]}>
        Mansions you only dreamed of
      </Text>

      <IntroSlider
        pages={[
          <Image style={styles.image} source={HomeImage} />,
          <Image style={styles.image} source={HomeImage} />,
          <Image style={styles.image} source={HomeImage} />,
        ]}
      />

      <PrimaryButton
        title="SIGNUP"
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
      <Text style={styles.termsText}>Terms of service</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.COLORS.LIGHT_GRAY,
  },
  header: {
    width: '100%',
    textAlign: 'left',
    paddingLeft: 30,
  },
  title: {
    fontFamily: Fonts.CIRCULAR_STD.Book,
    fontSize: 16,
    color: Theme.COLORS.DARK_GRAYISH_BLUE,
    lineHeight: 18,
    marginTop: 44,
  },
  subTitle: {
    fontFamily: Fonts.CIRCULAR_STD.Bold,
    fontSize: 32,
    color: Theme.COLORS.BRIGHT_BLUE,
    lineHeight: 36,
    marginTop: 20,
  },
  image: {
    height: '60%',
    width: '100%',
  },
  termsText: {
    fontFamily: Fonts.CIRCULAR_STD.MEDIUM,
    color: Theme.COLORS.DARK_GRAYISH_BLUE,
    fontSize: 12,
    lineHeight: 14,
    marginTop: 15,
    marginBottom: 26,
  },
});

export default IntroductionScreen;
