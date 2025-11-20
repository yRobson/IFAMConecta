import { Image, TouchableOpacity, View } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

import { colors } from "@/styles/colors"
import { styles } from "./styles"

import { Button } from "@/components/button"
import { InputText } from "@/components/InputText"

export default function Index () {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image 
                    source={require("@/assets/logo-ifam.png")}
                    style={styles.logoIfam}
                    resizeMode="contain"
                />

                <TouchableOpacity>
                    <MaterialIcons name="help" size={32} color={colors.green[900]} />
                </TouchableOpacity>
            </View>

            <View style={styles.hero}>
                <Image 
                    source={require("@/assets/logo.png")}
                    style={styles.logo}
                    resizeMode="contain"
                />
            </View>

            <View style={styles.form}>
                <InputText 
                    placeholder="E-mail"
                    keyboardType="email-address"
                />
                <InputText 
                    placeholder="Senha"
                    secureTextEntry={true}
                />
            </View>

            <View style={styles.buttonContainer}>
                <Button 
                    title="Entrar"                    
                />

                <Button 
                    title="Cadastrar"
                    isSecondary={true}
                />
            </View>
        </View>
    )
}