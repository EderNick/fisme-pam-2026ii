import { Movie, MovieDetail } from '../interfaces/movie.interface';
import { TMDBMovieDetailResponse } from "../responses/movie-detail.response";
import { Result } from "../responses/movie.response";

export class MovieMapper {

    static fromTMDBResponseToMovie = (movie: Result): Movie => {
        return {
            id: movie.id,
            title: movie.title,
            description: movie.overview,
            releaseDate: new Date(movie.release_date),
            rating: movie.vote_average,
            poster: movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : '',
            backdrop: movie.backdrop_path ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}` : '',
        };
    }

    static fromTMDBMovieDetailToMovieDetail = (movie: TMDBMovieDetailResponse): MovieDetail => {
        return {
            id: movie.id,
            title: movie.title,
            description: movie.overview,
            releaseDate: new Date(movie.release_date),
            rating: movie.vote_average,
            poster: movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : '',
            backdrop: movie.backdrop_path ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}` : '',
            votes: movie.vote_count,
            originalTitle: movie.original_title
        }
    }
}