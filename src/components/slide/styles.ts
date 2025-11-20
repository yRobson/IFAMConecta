import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        borderColor: colors.gray[200],
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: colors.white
    },

    header: {
        marginBottom: 10
    },

    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: colors.green[900]
    },

    subTitle: {
        fontSize: 14,
        color: colors.gray[600]
    },

    body: {
        marginTop: 4
    },

    description: {
        fontSize: 14,
        color: colors.gray[800]
    }
})