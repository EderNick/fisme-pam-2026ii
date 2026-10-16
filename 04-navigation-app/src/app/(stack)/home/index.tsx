import { router } from 'expo-router'
import { Pressable, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <View className='mt-3'>
                <Pressable
                    className='bg-blue-800 mb-2 p-3 rounded active:opacity-90'
                    onPress={() => router.push('./products')}
                >
                    <Text className='text-center color-white'>Productos</Text>
                </Pressable>

                <Pressable
                    className='bg-amber-500 mb-2 p-3 rounded active:opacity-90'
                    onPress={() => router.push('./users')}
                >
                    <Text className='text-center color-white'>Usuarios</Text>
                </Pressable>

                <Pressable
                    className='bg-red-800 mb-2 p-3 rounded active:opacity-90'
                    onPress={() => router.push('./profile')}
                >
                    <Text className='text-center color-white'>Perfil</Text>
                </Pressable>

                <Pressable
                    className='bg-purple-800 mb-2 p-3 rounded active:opacity-90'
                    onPress={() => router.push('./settings')}
                >
                    <Text className='text-center color-white'>Ajustes</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen