import { StyleSheet } from "react-native"
import { colors } from "@/styles/colors"

export const styles = StyleSheet.create({
    container: {
        fontSize: 16,
        color: colors.gray[900],
        backgroundColor: colors.gray[100],
        paddingVertical: 14,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: colors.gray[600],
    }
})