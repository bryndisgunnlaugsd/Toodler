import { StyleSheet } from 'react-native';
import { primaryBlue, gray700, primaryRed, primaryGreen, primaryPurple } from '@/src/styles/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    },

    image: {
        width: 200,
        height: 200,

    },

    paragraph: {
        textAlign: "center",
        color: "black"
    },

    button: {
        marginTop: 30,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderColor: 'white',
        borderWidth: 2,
        backgroundColor: gray700,
    },

    buttonText:{
        color: 'white'
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,},

})