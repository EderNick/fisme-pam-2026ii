import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";
import { TMDBResponse } from "@/infrastructure/responses/movie.response";
import { movieApi } from "../api/movie-api";

export const nowPlayingAction = async () => {
    try {
        const { data } = await movieApi.get<TMDBResponse>("/now_playing");
        const movies = data.results.map(MovieMapper.fromTMDBResponseToMovie);
        //Es lo mismo que : const movies = data.results.map((elem) => MovieMapper.fromTMDBResponseToMovie(elem));

        // console.log(JSON.stringify(movies, null, 2));
        return movies;
    } catch (error) {
        console.log(error);
        throw "No se puede cargar las películas.";
    }
}