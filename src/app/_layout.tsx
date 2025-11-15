import { Stack } from "expo-router"

export default function Layout() {
    return (
        <Stack 
            initialRouteName="login/index"
            screenOptions={{
                headerShown: false,
                contentStyle: {backgroundColor: 'transparent'},
                animation: "slide_from_left",
                animationDuration: 0,
            }}
        >
            <Stack.Screen name="./login/index"/>
        </Stack>
    )
}