import {Platform, StatusBar, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

export default {
  STATUSBAR_HEIGHT,
  SCREEN_WIDTH: width,
  SCREEN_HEIGHT: height,
};
