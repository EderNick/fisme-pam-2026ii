import { Movie } from '@/infrastructure/interfaces/movie.interface';
import { nowPlayingAction } from '@/services/actions/now_playing.action';
import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native';

const MoviesScreen = () => {

    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let active = true;

        const loadMovies = async () => {
            try {
                const result = await nowPlayingAction();
                if (active) setMovies(result);
            } catch (error) {
                if (active) setError("No se pudo cargar las películas.");
            } finally {
                if (active) setLoading(false);
            }
        }

        loadMovies();

        return () => {
            active = false;
        }
    }, [])

    if (loading) {
        return (
            <View className='flex-1 align-items-center justify-content-center'>
                <ActivityIndicator size='large' />
                <Text className='mt-3'>Cargando películas...</Text>
            </View>
        )
    }

    if (error) {
        return (
            <View className='flex-1 align-items-center justify-content-center'>
                <Text className='text-center'>{error}</Text>
            </View>
        )
    }

    return (
        <View className='flex-1'>
            <FlatList
                numColumns={2}
                data={movies}
                keyExtractor={(m) => String(m.id)}
                renderItem={({ item }) => (
                    <View className='w-1/2 p-2'>
                        <Image
                            source={{ uri: item.poster }}
                            className='w-full aspect-[2/3] rounded-xl' />
                        <Text className='font-bold'>{item.title}</Text>
                        <Text className='text-slate-400'>{item.releaseDate.getFullYear()}</Text>
                    </View>
                )}
            />
        </View>
    )
}

export default MoviesScreen