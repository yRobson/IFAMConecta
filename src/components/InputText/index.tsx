import { TextInput, TextInputProps } from "react-native"
import { styles } from "./styles"
import { colors } from "@/styles/colors"

export function InputText({ ...rest } : TextInputProps ) {
    return (
        <TextInput
            style={styles.container}
            autoComplete="off"
            { ...rest }
        />
    )
}