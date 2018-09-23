import React from 'react';
import {
    Text,
    View,
    ListView,
    TouchableHighlight,
    Dimensions,
    Image,
    StyleSheet
} from 'react-native';
import data from './data';
import Header from './header'
/**hay que agregar algo en las configuraciones de android/app/ */
import Icon from 'react-native-vector-icons/Ionicons' //npm install react-native-vector-icons --save

const {width,height} = Dimensions.get('window')
export default class Visual extends React.Component {
    static navigationOptions = {
        title: 'new Recipes',
        headerRight: (
            <Header/>
          ),
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
            <TouchableHighlight style = {styles.borederCell}>
                <View>
                    <Image
                     style = {{width:width,height:180}}
                     source =  {{uri:rowData.image}}
                    />
                    <Icon name = 'ios-alarm' />
                    <View style={styles.footerContainer}>
                        <View
                            style = {styles.imageUser}
                        >
                            <Image
                                style = {styles.imageAvatar}
                                source={{uri:rowData.user}}
                            />
                        </View>
                        <View style={styles.footerTextContainer}>
                            <Text style = {styles.text}>{rowData.food}</Text>
                            <Text style = {styles.text}>{rowData.title}</Text>
                            <Text style = {styles.text}>By {rowData.by}</Text>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
    render (){
        return (
            <ListView style = {styles.listContainer}
                renderRow = {this.renderRow.bind(this)}
                dataSource = {this.state.dataSouce}
            />
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
