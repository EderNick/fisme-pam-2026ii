import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";
import { TMDBSearchResponse } from "@/infrastructure/responses/movie-search.response";
import { movieApi } from "../api/movie-api";

export const SearchMovieAction = async (query: string) => {
    try {
        const { data } = await movieApi.get<TMDBSearchResponse>('/search/movie', {
            params: { query }
        });

        return data.results.map(MovieMapper.fromTMDBResponseToMovie);
    } catch (error) {
        console.log(error);
        throw "Error al intentar buscar una película.";
    }
}