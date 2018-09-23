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
            <View>
                <TouchableHighlight>
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
    footerContainer: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical:10,
        backgroundColor: '#555566'
    },
    imageAvatar: {
        width: 50,
        height:50,
        borderRadius:30, 
        marginRight:5
    },
    listContainer: {
        marginHorizontal:15
    },
    text: {
        color:'#fff'
    },
    borederCell:{
        marginBottom:10
    }
})
