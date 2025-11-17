import { StyleSheet } from "react-native"
import { colors } from "@/styles/colors"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
    },

    imageBackground: {
        flex: 1,
    },

    header: {
        width: "100%",
        paddingHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
    },

    logoIfam: {
        width: 32,
        height: 32,
    },

    hero: {
        paddingVertical: 20,
        alignItems: "center",
        justifyContent: "center",
    },

    logo: {
        width: 250,
        height: 200,
    },

    form: {
        width: "100%",
        paddingHorizontal: 30,
        gap: 14,
        marginTop: 10,
    },

    buttonContainer: {
        marginTop: 30,
        paddingHorizontal: 30,
        gap: 12,
    }
})