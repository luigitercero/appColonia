import React from 'react';
import {
    Text, View,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
    AsyncStorage,
} from 'react-native';
import Background from './BackGround';
import styles from './styles'
import SingInScreen from './singInScreen';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '', dataSource: '' }
    }
    clearText = () => {
        this._textInput.setNativeProps({ text: '' });
    }
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
                    </View>
                </KeyboardAvoidingView>
            </Background>
        );
    }



}

