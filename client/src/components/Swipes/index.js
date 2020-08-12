import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const styles = {
    slide: {
      padding: 15,
      minHeight: 100,
      color: '#fff',
      fontSize: 32,
    },
    slide1: {
      background: '#FEA900',
    },
    slide2: {
      background: '#B3DC4A',
    },
    slide3: {
      background: '#6AC0FF',
    },
  };

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Swipes = () => (
  <AutoPlaySwipeableViews>
    <div style={Object.assign({}, styles.slide, styles.slide1)}>
    Join people Active@ in your area
    </div>
    <div style={Object.assign({}, styles.slide, styles.slide2)} align="center">
    Be Active@ in the things you enjoy
    </div>
    <div style={Object.assign({}, styles.slide, styles.slide3)} align="right">
    Find what's Active@ near you
    </div>
  </AutoPlaySwipeableViews>
);

export default Swipes;