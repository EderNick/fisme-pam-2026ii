import { Redirect, useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';
import { products } from '../../../../store/products.stores';

const ProductScreen = () => {

    const { id } = useLocalSearchParams();

    const producto = products.find(p => p.id === id);

    if (!producto) {
        return <Redirect href="./" />
    }

    return (
        <View className='px-5 mt-10'>
            <Text className='text-2xl font-bold'>{producto.title}</Text>
            <Text>{producto.description}</Text>
            <Text className='font-bold' >{producto.price}</Text>
        </View>
    )
}

export default ProductScreen