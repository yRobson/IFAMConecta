import { View, Image, TouchableOpacity, FlatList } from "react-native"
import { useRef, useState, useEffect } from "react"

import { MaterialIcons } from "@expo/vector-icons"
import { colors } from "@/styles/colors"
import { styles } from "./styles"

import { CardButton } from "@/components/cardButton"
import { Slide } from "@/components/slide"

import { heros } from "@/utils/hero"

export default function Index() {
    
    const flatListRef = useRef<FlatList> (null)
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            let nextIndice = currentIndex + 1

            if (nextIndice >= 4) {
                nextIndice = 0
            }
            
            flatListRef.current?.scrollToIndex({index: nextIndice, animated:true})
            setCurrentIndex(nextIndice)
        }, 3000)

        return () => clearInterval(interval)

    }, [currentIndex])
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image 
                    source={require("@/assets/logo-ifam.png")}
                    style={styles.logoIfam}
                    resizeMode="contain"
                />

                <TouchableOpacity>
                    <MaterialIcons name="menu" size={32} color={colors.green[900]} />
                </TouchableOpacity>
            </View>

            <View style={styles.heroContainer}>
                <FlatList 
                    data={heros}
                    keyExtractor={( item ) => item.id}
                    renderItem={({item}) => (
                        <View style={styles.slideContent}>
                            <Slide 
                                title={item.title}
                                subTitle={item.subTitle}
                                description={item.description}
                            />
                        </View>
                    )}

                    ref={flatListRef}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                />
            </View>

            <View style={styles.content}>
                <CardButton 
                    title="Calendário"
                    iconName="calendar-month"
                />

                <CardButton 
                    title="Eventos"
                    iconName="event"
                />

                <CardButton 
                    title="Notícias"
                    iconName="newspaper"
                />

                <CardButton 
                    title="Biblioteca"
                    iconName="local-library"
                />

                <CardButton 
                    title="Documentos"
                    iconName="document-scanner"
                />

                <CardButton 
                    title="Contatos"
                    iconName="contacts"
                />
            </View>
        </View>
    )
}