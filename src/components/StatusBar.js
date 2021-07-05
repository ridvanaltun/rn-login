import React from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';
import {Computed} from '../constants';

// IOS not allowing Status Bar color changing,
// All Android devices will work fine but,
// On IOS works only devices below the iPhone X (iPhone 8, 7, 6, 5, etc…).

const StatusBarInstance = ({backgroundColor, ...props}) => {
  return (
    <View style={[styles.statusBar, {backgroundColor}]}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    height: Computed.STATUSBAR_HEIGHT,
  },
});

export default StatusBarInstance;
