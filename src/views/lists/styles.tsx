import { StyleSheet } from 'react-native';
import { white } from '@/src/styles/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: white,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        flex: 1,
        marginLeft: 10,
    },
    addButtonContainer: {
        width: 35,
        height: 35,
        borderRadius: 20,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 8,
        shadowColor: '#000',
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
        color: '#000',
        fontWeight: '300',
        textAlign: 'center',
        lineHeight: 28,
    },
    listItem: {
        padding: 15,
        marginVertical: 8,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        height: 70
    },
    listName: {
        fontSize: 18,
        fontWeight: '600',
    },
    button: {
        backgroundColor: '#007AFF',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
     },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
    },
});