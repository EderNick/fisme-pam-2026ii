import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";
import { TMDBMovieDetailResponse } from "@/infrastructure/responses/movie-detail.response";
import { movieApi } from "../api/movie-api";

export const movieDetailAction = async (id: number) => {
    try {
        const { data } = await movieApi.get<TMDBMovieDetailResponse>(`/${id}`);
        return MovieMapper.fromTMDBMovieDetailToMovieDetail(data);
    } catch (error) {

    }
}