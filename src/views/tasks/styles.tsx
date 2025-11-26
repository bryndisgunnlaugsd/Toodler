import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 32,
        backgroundColor: "#f5f5f5",
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
        borderColor: "white",
        borderWidth: 2,
        backgroundColor: "gray",
    },

    buttonText:{
        color: "white"
    },

    title: {
        fontSize: 28,
        fontWeight: "800",
        marginBottom: 0,
        color: "#000",
    },

    addButtonContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#ffffff",
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 3,
    },
    addButton: {
        fontSize: 26,
        color: "#000",
        fontWeight: "400",
        textAlign: "center",
        lineHeight: 26,
    },
    headerRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 24,
    },
});