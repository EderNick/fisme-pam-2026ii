import { Link } from 'expo-router'
import { Text, View } from 'react-native'

const MoviesScreen = () => {
    return (
        <View>
            <Text>MoviesScreen</Text>
            <Link href="./movies/10">Ir a detalle</Link>
        </View>
    )
}

export default MoviesScreen