import { StyleSheet } from "react-native"
import { colors } from "@/styles/colors"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40
    },

    header: {
        width: "100%",
        paddingHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
        borderBottomColor: colors.gray[200],
        borderBottomWidth: 1,
        paddingBottom: 10
    },

    logoIfam: {
        width: 32,
        height: 32
    },

    content: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        paddingHorizontal: 15
    },

    heroContainer: {
        width: "100%",
        height: 150,
        paddingHorizontal: 12,
        marginBottom: 20
    },

    slideContent: {
        width: 388,
        paddingRight: 1
    }
})