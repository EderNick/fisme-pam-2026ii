import { Ionicons } from "@react-native-vector-icons/ionicons/";
import { Tabs } from "expo-router";


const TabsLayout = () => {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'green' }}>
            <Tabs.Screen
                name="movies/index"
                options={{
                    title: 'Cartelera',
                    tabBarIcon: ({ color }) => <Ionicons size={25} name="home-outline" color={color} />,
                }}
            />
            <Tabs.Screen
                name="search"
                options={{
                    title: 'Buscar',
                    tabBarIcon: ({ color }) => <Ionicons size={25} name="search-outline" color={color} />,
                }}
            />
            <Tabs.Screen
                name="favorites"
                options={{
                    title: 'Favoritos',
                    tabBarIcon: ({ color }) => <Ionicons size={25} name="star-outline" color={color} />,
                }}
            />
        </Tabs>
    )
}

export default TabsLayout