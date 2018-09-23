import React from 'react';
import {
    Text,
    View,
    ListView,
    TouchableHighlight
} from 'react-native';

import data from './data';
export default class Visual extends React.Component {
    static navigationOptions = {
        title: 'new Recipes',
      };

    constructor (props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1,r2)=> r1!==r2})
        this.state = {
            dataSouce: ds.cloneWithRows(data)
        }
    }

    renderRow(rowData) {
        return (
            <Text>{rowData.title}</Text>
        )
    }
    render (){
        return (

            
        <ListView
            renderRow = {this.renderRow.bind(this)}
            dataSource = {this.state.dataSouce}
        />
        )
    }
}