import { StyleSheet } from "react-native";
import { white } from '@/src/styles/colors';

export default StyleSheet.create({
    listContainer: {
        flex: 1,
        backgroundColor: white,
    },

    plusbutton: {
        backgroundColor: "#fcb103",
        width: 50,
        height: 50,
        borderRadius: 30,
        position: "absolute",
        bottom: 20,
        right: 10,
        justifyContent: "center",
        alignItems: "center",
        borderWidth:0.75,
        borderColor: "Black",
    },
    
    plusbuttontext: {
        color: "white",
        fontSize: 30,
    }
});