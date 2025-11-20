import { View, Text } from "react-native"
import { styles } from "./styles"

interface SlideProps {
    title: string;
    subTitle?: string;
    description: string
}

export function Slide({ title, subTitle, description }: SlideProps ) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>
                    {title}
                </Text>
                <Text style={styles.subTitle}>
                    {subTitle}
                </Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.description}>
                    {description}
                </Text>
            </View>
        </View>
    )
}