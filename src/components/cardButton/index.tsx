import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";

type Props = TouchableOpacityProps & {
    title: string;
    iconName: keyof typeof MaterialIcons.glyphMap 
}

export function CardButton({title, iconName, ...rest}: Props) {
    return (
        <TouchableOpacity style={styles.container} {...rest}>
            <MaterialIcons name={iconName} style={styles.icon}/>
            <Text style={styles.label}>{title} </Text>
        </TouchableOpacity>
    )
}