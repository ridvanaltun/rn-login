import React, {useState} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {Theme, Computed} from '../constants';

const IntroSlider = ({pages}) => {
  const [sliderState, setSliderState] = useState({currentPage: 0});

  const setSliderPage = (event: any) => {
    const {currentPage} = sliderState;
    const {x} = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.floor(x / Computed.SCREEN_WIDTH);
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  };

  const {currentPage: pageIndex} = sliderState;

  return (
    <>
      <ScrollView
        style={styles.slider}
        horizontal={true}
        scrollEventThrottle={16}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onScroll={(event: any) => {
          setSliderPage(event);
        }}>
        {pages.map((page, index) => {
          return (
            <View
              key={`intro-${index}`}
              style={{
                width: Computed.SCREEN_WIDTH,
                height: Computed.SCREEN_HEIGHT,
              }}>
              {page}
            </View>
          );
        })}
      </ScrollView>
      {pages.length > 1 ? (
        <View style={styles.paginationWrapper}>
          {Array.from(Array(pages.length).keys()).map((key, index) => (
            <View
              style={[
                styles.paginationDots,
                {opacity: pageIndex === index ? 1 : 0.2},
              ]}
              key={index}
            />
          ))}
        </View>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  slider: {
    flex: 1,
  },
  paginationWrapper: {
    position: 'absolute',
    bottom: 125,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  paginationDots: {
    height: 6,
    width: 6,
    borderRadius: 10 / 2,
    backgroundColor: Theme.COLORS.LIGHT_GRAYISH_BLUE,
    marginLeft: 7,
  },
});

export default IntroSlider;
