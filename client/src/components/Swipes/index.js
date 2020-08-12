import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const styles = {
    slide: {
      padding: 15,
      minHeight: 100,
      color: '#fff',
      fontSize: 32,
      background: 'black'
    },
    auto: {
      interval: '1000000',
      duration: '0.8s', 
      easeFunction: '...', 
      delay: '1s'
    }
  };

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Swipes = () => (
  <AutoPlaySwipeableViews interval="5000">
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