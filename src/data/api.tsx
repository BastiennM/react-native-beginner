import axios from 'axios';
import {Movie} from '../components/MovieList';
// @ts-ignore
import {API_KEY} from '@env';

export enum Category { ALL, ROMANCE, SPORTS, KIDS, HORROR }

interface CategoryParams {
    with_genres?: number;
    certification_country?: string;
    'certification.lte'?: string;
}

const BASE_URL = 'https://api.themoviedb.org/3';
const BASE_POSTER_URL = 'https://image.tmdb.org/t/p/original';

const api = axios.create({
    baseURL: BASE_URL,
    params: {
        api_key: API_KEY,
    },
});

const getParams = (category: Category): CategoryParams => {
    const params: CategoryParams = {};

    switch (category) {
        case Category.ROMANCE:
            params.with_genres = 10749; // Genre ID for Romance
            break;
        case Category.SPORTS:
            params.with_genres = 10770; // Genre ID for Sports
            break;
        case Category.KIDS:
            params.certification_country = 'FR';
            params['certification.lte'] = '12'; // Suitable for kids under 12
            break;
        case Category.HORROR:
            params.with_genres = 27; // Genre ID for Horror
            break;
        case Category.ALL:
        default:
            break;
    }

    return params;
};

const fetchMovies = async (endpoint: string, category: Category, additionalParams: Record<string, any> = {}) : Promise<Movie[]> => {
    try {
        const categoryParams = getParams(category);
        const params = { ...categoryParams, ...additionalParams };
        const response = await api.get(endpoint, { params });

        return response.data.results.map((movie: any) => ({
            id: movie.id,
            title: movie.title,
            poster_path: BASE_POSTER_URL + movie.poster_path,
            backdrop_path: movie.backdrop_path,
            overview: movie.overview,
            release_date: movie.release_date,
            vote_average: movie.vote_average,
            genre_ids: movie.genre_ids,
        }));
    } catch (error) {
        console.error(`Error fetching movies from ${endpoint}:`, error);
        throw error;
    }
};

export const fetchMarvelMovies = (category: Category) => {
    return fetchMovies('/discover/movie', category, { with_companies: 420 });
};

export const fetchBestMovies = (category: Category) => {
    return fetchMovies('/discover/movie', category, { sort_by: 'vote_average.desc', 'vote_count.gte': 1000 });
};

export const fetchMoviesByGenre = (category: Category) => {
    return fetchMovies('/discover/movie', category);
}

export const fetchBestMoviesByGenre = (category: Category) => {
    return fetchMovies('/discover/movie', category, { sort_by: 'vote_average.desc', 'vote_count.gte': 1000 });
}
