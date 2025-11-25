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

})