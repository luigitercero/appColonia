import React from 'react';

import {
    Text, View,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
    AsyncStorage,Button,
    Animated
} from 'react-native';
import Background from './BackGround';
import styles from './styles'





class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '', dataSource: '' }
    }
    clearText = () => {
        this._textInput.setNativeProps({ text: '' });
    }
    static navigationOptions = {
      title: 'Please sign in',
      header: null,
    };
  
    render() {
      return (
   

        <Background>
                <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
                    <View style={styles.container}>
                        <Text style={styles.header}> Log in </Text>
                        <TextInput style={styles.textInput}
                            placeholder='Username'
                            placeholderTextColor={'white'} 
                            onChangeText={(username) => this.setState({ username })}
                            underlineColorAndroid='transparent'
                        />
                        <TextInput secureTextEntry={true} style={styles.textInput}
                            placeholder='Password'
                            placeholderTextColor={'white'} 
                            onChangeText={(password) => this.setState({ password })}
                            underlineColorAndroid='transparent'
                            ref={component => this._textInput = component}
                        />
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={this.login}
                        >
                            <Text style={styles.text}>Sing In</Text>
                        </TouchableOpacity>
                      
                    </View>
                </KeyboardAvoidingView>
              
               
          <Button title="Sign in!" onPress={this._signInAsync} />
            </Background>
          
     
      );
    }
  
    _signInAsync = async () => {
      await AsyncStorage.setItem('userToken', 'abc');
      this.props.navigation.navigate('App');
    };

    _signInAsyn2c = async (token) => {
        await AsyncStorage.setItem('userToken', token);
        this.props.navigation.navigate('App');
    }

    login = () => {

        var user = this.state.username
        var pass = this.state.password
        console.warn(user + pass);
        return fetch('http://35.231.109.219:3000/loginmovil', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: user,
                pass: pass,
            }),
        }).then(function (response) {
            return response.json();
        }).then((data) => {
            if (data.access === true) {
                AsyncStorage.setItem('user', user);
                this.setState({
                    dataSource: data.access,
                }, function () {
                    console.log('Bingo');
                    _signInAsyn2c('abc');
                    alert('Bingo');
                });
            } else {
                this.setState({
                    dataSource: false,
                }, function () {
                    console.log('algo está mal las credenciales ');
                });
                alert("algo está mal las credenciales no son");
            }
        }).catch((error) => {
            console.error(error);
        })
    }
}

export default Login;