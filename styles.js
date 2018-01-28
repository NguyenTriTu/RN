import { StyleSheet } from 'react-native';

export default (styles = StyleSheet.create({
    container: {
        flex:1,
        paddingTop:50
    },
    inputWrapper: {
        paddingLeft:10,
        paddingRight:10,
        alignItems:'center',
        flexDirection: 'row',
    },
    input: {
        flex:1,
        padding:10,
        margin: 10,
        borderColor: '#7a42f4',
        borderWidth: 1,
    },
    result: {
        margin: 10,
        padding: 10,
        color: 'orange',
        fontSize: 20,
    },
}));
