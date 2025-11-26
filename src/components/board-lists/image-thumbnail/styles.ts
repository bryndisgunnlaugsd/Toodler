import { StyleSheet } from "react-native";
import { white } from '@/src/styles/colors';

export default StyleSheet.create({
    shadowWrapper: {
        marginVertical: 10,
        marginHorizontal: 16,
        width: 350,
        borderRadius: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 6,
        elevation: 8,
    },

    card: {
        backgroundColor: white,
        borderRadius: 16,
        overflow: "hidden",
    },

    image: {
        width: "100%",
        height: 180,
    },

    textContainer: {
        padding: 10,
        backgroundColor: white,
    },

    name: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 4,
    },

    description: {
        fontSize: 14,
        color: "#555",
        lineHeight: 20,
    },
    menuWrapper: {
        position: "absolute",
        top: 10,
        right: 10,
        zIndex: 50,
    },

    menuButton: {
        padding: 6,
    },

    menuIcon: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#FFFFFF",
    },

    menuDropdown: {
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

    menuItem: {
        fontSize: 15,
        paddingVertical: 6,
        color: "#000",
    },

    menuItemDelete: {
        fontSize: 15,
        paddingVertical: 6,
        color: "#d11",
        fontWeight: "600",
    },


});