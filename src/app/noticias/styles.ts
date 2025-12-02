import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 24
    },

    background: {
        flex: 1,
        resizeMode: 'contain'
        
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold'

    }
})