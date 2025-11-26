import { white } from "@/src/styles/colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: white,
        alignItems: "center",
        justifyContent: "flex-start",
        overflow: "hidden"
    },

    addButtonContainer: {
        width: 35,
        height: 35,
        borderRadius: 20,
        backgroundColor: "#f5f5f5",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    addButton: {
        fontSize: 28,
        color: "#000",
        fontWeight: "300",
        textAlign: "center",
        lineHeight: 28,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        flex: 1,
        marginLeft: 10,
    },


});