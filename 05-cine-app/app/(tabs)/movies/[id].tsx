import { View } from '@/components/Themed';
import { MovieDetail } from '@/infrastructure/interfaces/movie.interface';
import { movieDetailAction } from '@/services/actions/movie_detail.action';
import { Stack, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Image, ScrollView, Text } from 'react-native';

const MovieScreen = () => {

    const [movie, setMovie] = useState<MovieDetail>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const { id } = useLocalSearchParams();

    useEffect(() => {
        let active = true;

        const loadMovieDetail = async () => {
            try {
                const result = await movieDetailAction(Number(id));
                if (active) setMovie(result);
            } catch (error) {
                if (active) setError("No se pudo cargar la película.");
            } finally {
                if (active) setLoading(false);
            }
        }

        loadMovieDetail();

        return () => {
            active = false;
        }
    }, [id]);

    if (loading) {
        return (
            <View className='flex-1 items-center justify-center'>
                <Text className='mb-3 text-center'>Cargando...</Text>
                <ActivityIndicator size='large' />
            </View>
        )
    }

    if (error) {
        return (
            <View className='flex-1 items-center justify-center'>
                <Text className='text-center'>{error}</Text>
            </View>
        )
    }

    if (!movie) return null;

    return (
        <>
            <Stack.Screen options={{ title: movie?.title }} />


            <ScrollView
                className="flex-1 bg-white"
                contentContainerStyle={{ paddingBottom: 32 }}
            >
                <View className="relative aspect-[16/8] w-full">
                    {movie.backdrop ? (
                        <Image
                            source={{ uri: movie.backdrop }}
                            className="absolute left-0 top-0 h-full w-full bg-gray-200"
                            resizeMode="cover"
                        />
                    ) : (
                        <View className="h-full w-full items-center justify-center bg-gray-200">
                            <Text className="text-gray-600">
                                Banner no disponible
                            </Text>
                        </View>
                    )}
                </View>

                <View className="flex-row items-start px-4">
                    <View className="-mt-20 z-10 w-[38%] overflow-hidden rounded-lg">
                        {movie.poster ? (
                            <Image
                                source={{ uri: movie.poster }}
                                className="aspect-[2/3] w-full"
                                resizeMode="cover"
                            />
                        ) : (
                            <View className="aspect-[2/3] w-full items-center justify-center rounded-lg bg-gray-200 p-2">
                                <Text className="text-center text-gray-600">
                                    Póster no disponible
                                </Text>
                            </View>
                        )}

                    </View>


                    <View className="ml-4 flex-1">
                        <Text className="text-sm text-gray-500">
                            {movie.originalTitle}
                        </Text>

                        <Text className="mb-3 mt-1 text-2xl font-bold text-black">
                            {movie.title}
                        </Text>

                        <View className="border-b border-gray-300 py-2">
                            <Text className="text-base text-black">
                                Año: {movie && !Number.isNaN(movie.releaseDate.getTime())
                                    ? movie.releaseDate.getUTCFullYear().toString()
                                    : 'No disponible'}
                            </Text>
                        </View>

                        <View className="border-b border-gray-300 py-2">
                            <Text className="text-base text-black">
                                Calificación: {movie
                                    ? `${Math.round(movie.rating * 10)} %`
                                    : ''}
                            </Text>
                        </View>

                        <View className="border-b border-gray-300 py-2">
                            <Text className="text-base text-black">
                                Votos: {movie.votes}
                            </Text>
                        </View>
                    </View>
                </View>

                <View className="px-4 pt-8">
                    <Text className="mb-3 text-xl font-bold text-black">
                        Sinopsis
                    </Text>

                    <Text className="text-base leading-6 text-gray-800">
                        {movie.description || 'Sin sinopsis disponible.'}
                    </Text>
                </View>
            </ScrollView >

        </>
    )
}

export default MovieScreen