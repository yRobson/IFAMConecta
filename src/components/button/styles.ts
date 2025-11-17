import { StyleSheet } from "react-native"
import { colors } from "@/styles/colors"

export const styles = StyleSheet.create({
    container: {
        height: 50,
        width: "100%",
        borderRadius: 6,
        justifyContent: "center",
        alignItems: "center",
    },

    title: {
        color: colors.white,
        fontSize: 16,
        fontWeight: "bold",
    }
})