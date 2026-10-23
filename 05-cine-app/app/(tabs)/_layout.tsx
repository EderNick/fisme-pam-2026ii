import { View } from "@/components/Themed";
import { Ionicons } from "@react-native-vector-icons/ionicons/";
import { Tabs } from "expo-router";
import { useEffect, useState } from "react";


const TabsLayout = () => {

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, [])


    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'green', headerShown: false }}>
            <Tabs.Screen
                name="movies"
                options={{
                    title: 'Cartelera',
                    tabBarIcon: ({ color }) =>
                        mounted ? (
                            <Ionicons size={25} name="home-outline" color={color} />
                        ) : (
                            <View style={{ width: 25, height: 25 }}></View>
                        ),
                }}
            />
            <Tabs.Screen
                name="search"
                options={{
                    title: 'Buscar',
                    tabBarIcon: ({ color }) =>
                        mounted ? (
                            <Ionicons size={25} name="search-outline" color={color} />
                        ) : (
                            <View style={{ width: 25, height: 25 }}></View>
                        ),
                }}
            />
            <Tabs.Screen
                name="favorites"
                options={{
                    title: 'Favoritos',
                    tabBarIcon: ({ color }) =>
                        mounted ? (
                            <Ionicons size={25} name="star-outline" color={color} />
                        ) : (
                            <View style={{ width: 25, height: 25 }}></View>
                        ),
                }}
            />
        </Tabs>
    )
}

export default TabsLayout