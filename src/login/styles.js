
import {
    StyleSheet
} from 'react-native'
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: '#2896d3',
        paddingLeft: 40,
        paddingRight: 40,

    },
    header: {
        fontSize: 24,
        marginBottom: 60,
        color: '#fff',
    },
    textInput: {
        alignSelf: 'stretch',
        padding: 16,
        marginBottom: 20,
        backgroundColor: 'transparent',
        color: '#fff'

    },
    btn: {
        alignSelf: 'stretch',
        padding: 20,
        alignItems: 'center',
        borderWidth: 0.8,
        borderColor: '#fff',
        borderRadius: 20,

    },
    text: {
        color: '#fff'
    },
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        // resizeMode: 'cover'
    }
});

export default styles;