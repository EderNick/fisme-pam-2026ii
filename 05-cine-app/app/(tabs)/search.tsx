import { Movie } from '@/infrastructure/interfaces/movie.interface';
import { SearchMovieAction } from '@/services/actions/search_movie.action';
import { useState } from 'react';
import { Pressable, TextInput, View } from 'react-native';
import { Text } from '../../components/Themed';

const SearchScreen = () => {

    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const buscar = async () => {
        const texto = query.trim();

        if (!texto) {
            setMovies([]);
            setError("Escribe el título de la película.")
            return;
        }

        setLoading(true);
        setError('');
        setMovies([]);

        try {
            const resultados = await SearchMovieAction(texto);
            setMovies(resultados);

            console.log("pelis: ", resultados);
        } catch (error) {
            setError("No se pudo cargar los resultados.")
        } finally {
            setLoading(false);
        }

    }

    return (
        <View>
            {/* Input de busqueda */}
            <View>
                <TextInput
                    className='rounded-xl border border-gray-300 px-4 py-3 text-base  bg-white mt-3'
                    placeholder='Ejemplo: Batman'
                    placeholderTextColor="#6b7280"
                    value={query}
                    onChangeText={setQuery}
                    onSubmitEditing={buscar}
                />
                <Pressable
                    className='mt-3 items-center rounded-xl bg-green-700 p-3 '
                    onPress={buscar}
                    disabled={loading}
                >
                    <Text className="text-white font-bold">
                        {loading ? 'Cargando...' : "Buscar"}
                    </Text>
                </Pressable>
            </View>


            {/* Resultados de la busqueda */}
            <View>

            </View>
        </View>
    )
}

export default SearchScreen