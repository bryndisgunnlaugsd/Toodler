import { StyleSheet } from "react-native";
import { white } from "@/src/styles/colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 12,
        paddingTop: 20,
        backgroundColor: white,
    },

    listItem: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

        borderRadius: 18,

        paddingHorizontal: 16,
        paddingVertical: 18,
        marginBottom: 20,

        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 6,
        elevation: 4,

        position: "relative",
        zIndex: 1,
        overflow: "visible",
    },

    listItemActive: {
        zIndex: 100,
        elevation: 20,
    },

    listInfo: {
        flex: 1,
    },

    listName: {
        fontSize: 18,
        fontWeight: "600",
        color: "#000",
    },

    listMenuWrapper: {
        position: "relative",
        paddingLeft: 10,
    },

    listMenuButton: {
        padding: 6,
    },

    listMenuIcon: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
    },

    listMenu: {
        position: "absolute",
        top: 28,
        right: 0,

        backgroundColor: "#fff",
        borderRadius: 12,
        paddingVertical: 10,
        paddingHorizontal: 16,
        width: 150,

        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 8,
        elevation: 21,

        zIndex: 101,
    },

    listMenuItem: {
        fontSize: 15,
        paddingVertical: 6,
        color: "#000",
    },

    listMenuItemDelete: {
        fontSize: 15,
        paddingVertical: 6,
        color: "#d11",
        fontWeight: "600",
    },
});
