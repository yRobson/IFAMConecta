import { colors } from "@/styles/colors"
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native"
import { styles } from "./styles"

type Props = TouchableOpacityProps & {
    title: string
    isSecondary?: boolean
}

export function Button({ title, isSecondary=false, ...rest } : Props ) {
    const backgroundColor= isSecondary ? colors.gray[500] : colors.green[700]
    return (
        <TouchableOpacity style={[styles.container, {backgroundColor}]} {...rest} >
            <Text style={styles.title}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}