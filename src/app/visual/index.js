import React from 'react';
import {
    Text,
    View,
    ListView,
    TouchableHighlight,
    Dimensions,
    Image,
    StyleSheet,
    Animated
} from 'react-native';
import data from './data';
import Header from './header'
/**hay que agregar algo en las configuraciones de android/app/ */
import Icon from 'react-native-vector-icons/Ionicons' //npm install react-native-vector-icons --save

const {width,height} = Dimensions.get('window')
export default class Visual extends React.Component {
    static navigationOptions = {
        title: 'new Recipes',
        
      };
    constructor (props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1,r2)=> r1!==r2})
        this.state = {
            isLoaded:false,
            isOpenMenu:false,
            dataSouce: ds.cloneWithRows(data),
            rotateY: new Animated.Value(0),
            translateX: new Animated.Value(width),
            menuAnimation: new Animated.Value(0)
            
        }
        
    }
    showMenu() {
        if(this.state.isOpenMenu) {
            this.setState({isOpenMenu:false});
            Animated.parallel([
                Animated.timing(
                    this.state.translateX, {
                        toValue:width
                    }
                ),/*
                Animated.timing([
                    this.state.rotateY, {
                        toValue:0
                    }
                ])*/
            ]).start()  //varias animaciones a la vez
        } else {
            this.setState({isOpenMenu:true});
            Animated.parallel([
                Animated.timing(
                    this.state.translateX, {
                        toValue:width *0.60
                    }
                ),/*
                Animated.timing([
                    this.state.rotateY, {
                        toValue:1
                    }
                ])*/
            ]).start() //varias animaciones a la vez
            
        }
    }
    closeMenu() {

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
                            <Text style = {[styles.text,styles.textTitle]}>{rowData.title}</Text>
                            <Text style = {[styles.text,styles.textBy]}>By {rowData.by}</Text>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
    render (){
        return (
            <View style = {styles.container}>
                <Animated.View
                    style ={[styles.content,{
                        width:width,
                        backgroundColor:'gray',
                        flex:1,
                        transform: [
                            {
                                perspective: 450
                            },
                            {
                                translateX:this.state.translateX.interpolate({
                                    inputRange: [0,width],
                                    outputRange: [width,0]
                                })
                            },
                             /*{
                               
                                rotateY: this.state.rotateY.interpolate({
                                    inputRange:[0,1],
                                    outputRange:['0rad','1rad']
                                })
                            } */
                        ]
                    }]}
                >
                    <Header icon = "bars" showMenu = {this.showMenu.bind(this)}/>
                    <ListView style = {styles.listContainer}
                        renderRow = {this.renderRow.bind(this)}
                        dataSource = {this.state.dataSouce}
                    />
                </Animated.View>
               
                <Animated.View style= {{
                    position: 'absolute',
                    width:140,
                    left:0,
                    top:100,
                    backgroundColor:'transparent'
                }}>
                    <Text>Home</Text>
                    <Text>new recipes</Text>
                    <Text>Recipes</Text>
                    <Text>Profile</Text>
                    <Text>Setting</Text>
                    
                    
                </Animated.View>
            </View>
            
        )
    }
}

const styles =StyleSheet.create ({
    container:{
        flex:1,

    },
    content:{
        zIndex: 1
    },
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
    },
    textTitle: {
        fontSize:13
    },

    textBy: {
        fontSize:12
    }
})
