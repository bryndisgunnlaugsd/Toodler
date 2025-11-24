import { StyleSheet } from 'react-native';
import { primaryBlue, gray700, primaryRed, primaryGreen, primaryPurple } from '@/src/styles/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: primaryPurple,
        alignItems: "center",
        justifyContent: "space-evenly"
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
    }



})