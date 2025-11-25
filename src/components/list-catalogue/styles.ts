// src/views/lists/styles.ts (or styles.tsx)
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    listItem: {
        padding: 15,
        marginVertical: 8,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        height: 60
    },
    listName: {
        fontSize: 18,
        fontWeight: '600',
    },
    button: {
        backgroundColor: '#007AFF',
        padding: 15,
        borderRadius: 8,
        marginVertical: 10,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
    },
});