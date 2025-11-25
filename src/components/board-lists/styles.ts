import { StyleSheet } from "react-native";

export default StyleSheet.create({
    listContainer: {
        flex: 1,
    },

    container: {
        flex: 1,
        padding:20,
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