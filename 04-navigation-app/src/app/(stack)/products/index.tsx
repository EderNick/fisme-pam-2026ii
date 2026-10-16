import { Link } from 'expo-router'
import { FlatList, Text, View } from 'react-native'
import { products } from '../../../../store/products.stores'

const ProductsScreen = () => {
    return (
        <View className='flex flex-1 px-4'>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View className='mt-10'>
                        <Text className='text-2xl font-bold'>{item.title}</Text>
                        <Text>{item.description}</Text>
                        <View className='flex flex-row justify-between'>
                            <Text className='font-bold' >{item.price}</Text>
                            <Link className='text-blue-600' href={`./products/${item.id}`}>Ver detalles</Link>
                        </View>
                    </View>
                )}

            />
        </View>
    )
}

export default ProductsScreen