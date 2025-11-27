import { View , ImageBackground, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function Index(){
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("@/assets/eventos.png")}
                style={styles.background}
            >
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => {router.back()}}>
                        <MaterialIcons name="arrow-back" size={32}/>

                    </TouchableOpacity>
                    <Text style={styles.title}>
                        Eventos
                    </Text>
                </View>
            </ImageBackground>
        </View>
    )
}