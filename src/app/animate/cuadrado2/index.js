/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
  Dimensions
} from 'react-native';

const {width, height} = Dimensions.get('window');

export default class Cuadrado2 extends Component {
  constructor(){
    super()
    this.state = {
      animate: new Animated.Value(30),
      animateXY: new Animated.ValueXY({x: 0, y: -20}),
      radius: new Animated.Value(0)
    }
    this.animateInterpolate = this.state.animateXY.x.interpolate({
        inputRange: [0,300],
        outputRange: [1,.4]
    })
  }
  
  componentWillMount () {
    Animated.sequence([
      Animated.timing(this.state.animateXY, {
        toValue: {x: height / 2, y: -140},
        duration: 6000
      }),
      Animated.timing(this.state.animate, {
        toValue: 60,
        duration: 6000
      }),
      Animated.timing(this.state.radius, {
        toValue: 40,
        duration: 2000
      })
    ]).start()
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Animated.View 
          style={
            {
              width: this.state.animate, 
              height: this.state.animate, 
              backgroundColor: '#fabada',
              position: 'absolute',
              top: this.state.animateXY.x,
              left: this.state.animateXY.y,
              borderRadius: this.state.radius,
                opacity:this.animateInterpolate
            }
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
 
    backgroundColor: '#F5FCFF',
  },
});