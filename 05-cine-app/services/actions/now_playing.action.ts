import { TMDBResponse } from "@/infrastructure/responses/movie.response";
import { movieApi } from "../api/movie-api";

export const nowPlayingAction = async () => {
    try {

        const { data } = await movieApi.get<TMDBResponse>("/now_playing");

        // console.log(JSON.stringify(data, null, 2));

        return data;
    } catch (error) {
        console.log(error);
        throw "No se puede cargar las películas.";
    }
}