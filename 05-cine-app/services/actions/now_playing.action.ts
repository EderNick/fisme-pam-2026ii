import { movieApi } from "../api/movie-api";

export const nowPlayingAction = async () => {
    try {

        const { data } = await movieApi.get("/now_playing");

        console.log(data);

    } catch (error) {
        console.log(error);
        throw "No se puede cargar las películas.";
    }
}