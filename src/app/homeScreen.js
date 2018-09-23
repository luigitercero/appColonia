import React from 'react';
import {
  AsyncStorage,
  Button,
  View,
  Animated,StyleSheet
} from 'react-native';
import styles from './styles';
import Cuadrado from './animate/cuadrado'
import CuadradoAnimation from './animate/cuadradoAnimation'
import Cuadrado2 from './animate/cuadrado2'

const style= StyleSheet.create({
    conteiner: {
        flex:1,
        justifyContent: 'center',
        alignItems:'center',

    }
})

class HomeScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            animate: new Animated.Value(30),
            animatexy: new Animated.ValueXY({x:0,y:0})
        }
    }
    static navigationOptions = {
    title: 'Welcome to the app!',
  };

  componentWillMount () {
      Animated.timing(this.state.animate,{
          toValue:60,
          duration: 3000
      }).start()
  }
  render() {
    return (
      <View style = {styles.container}>
        <Cuadrado2/>
        <Button title="Show me more of the app"  onPress={this._showMoreApp} />
        <Cuadrado/>
        
        <CuadradoAnimation/>
        <View>
            <Animated.View
                style={ 
                    {
                        with:this.state.animate,height:this.state.animate,backgroundColor:'#fabada'}}
            />
        </View>
        <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
        <Button title="Visual" onPress={this._visualApp} />
      </View>
    );
  }

  _visualApp = () => {
      this.props.navigation.navigate('Visual')
  }
  _showMoreApp = () => {
    this.props.navigation.navigate('Other');
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}

export default HomeScreen;