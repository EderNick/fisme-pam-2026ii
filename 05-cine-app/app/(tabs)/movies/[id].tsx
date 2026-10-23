import { Stack, useLocalSearchParams } from 'expo-router';
import { Text } from 'react-native';

const MovieScreen = () => {

    const { id } = useLocalSearchParams();

    return (
        <>
            <Stack.Screen options={{ title: id?.toString(), }} />
            <Text>MovieScreen - {id}</Text>
        </>
    )
}

export default MovieScreen