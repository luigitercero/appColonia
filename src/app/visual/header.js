import React from 'react';
import {
    View,
    TouchableHighlight,
    StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome' //npm install react-native-vector-icons --save

export default class Heaer extends React.Component {

    render (){
        return (
            <View  style = {styles.container}>
                <TouchableHighlight onPress = {this.props.showMenu}>
                    <Icon name = {this.props.icon} size={25} color = "#AAA"/>
                </TouchableHighlight>
                <Icon name = 'search' size={25} color = "#AAA"/>
                <Icon name = 'heart' size={25} color = "#AAA"/>
                <Icon name = 'ellipsis-v' size={25} color = "#AAA"/>
            </View>
        )
    }
}

const styles =StyleSheet.create ({
    container: {
        flexDirection: 'row',
        marginBottom:10,
        paddingHorizontal:20,
        paddingVertical:10,
        justifyContent:'space-between'
    },
    
})
