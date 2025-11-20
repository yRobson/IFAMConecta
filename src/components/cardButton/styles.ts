import { StyleSheet } from "react-native"
import { colors } from "@/styles/colors"


export const styles = StyleSheet.create({
    container: {
        width: '48%',
        aspectRatio: 1,
        backgroundColor: colors.white,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        shadowColor: colors.gray[900],
        shadowOffset: {width:0, height:2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },

    icon: {
        width: 80,
        height: 80,
        fontSize: 65,
        textAlign: 'center',
        color: colors.green[700],
        marginBottom: 8,   
    },

    label: {
        fontSize: 20,
        color: colors.gray[800],
        textAlign: 'center',
        fontWeight: '600',
    }
}) 