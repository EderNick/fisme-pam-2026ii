import { Stack } from 'expo-router'

const StackLayout = () => {
    return (
        <Stack
            screenOptions={
                {
                    headerShadowVisible: false,
                    contentStyle: {
                        backgroundColor: 'white'
                    }
                }
            }
        >
            <Stack.Screen
                name="home/index"
                options={
                    { title: "Inicio" }
                }
            />

            <Stack.Screen
                name="products/index"
                options={
                    {
                        title: "Productos",
                        animation: 'slide_from_right',

                    }
                }
            />

            <Stack.Screen
                name="products/[id]"
                options={
                    {
                        title: "Detalle de Producto",
                        animation: 'slide_from_right',

                    }
                }
            />
        </Stack>
    )
}

export default StackLayout