import React from 'react';
import {
    StyleSheet,
    ImageBackground
} from 'react-native';

import styles from './styles'
export default class BackGround extends React.Component {

    render() {
        return (
            <ImageBackground
                source={{
                    uri: 'https://www.melamorsicata.it/wp-content/uploads/2018/01/iMac-Pro-Effect.png',
                    method: 'POST',
                    headers: {
                        Pragma: 'no-cache',
                    },
                }}
                style={styles.backgroundImage}>
                {this.props.children}
            </ImageBackground>
        );
    }
}
