import axios from 'axios';

enum Category { ALL, ROMANCE, SPORTS, KIDS, HORROR }

const API_KEY = process.env.API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const api = axios.create({
    baseURL: BASE_URL,
    params: {
        api_key: API_KEY,
    },
});

const getParams = (category: Category, additionalParams: Record<string, any> = {}) => {
    const params: Record<string, any> = { ...additionalParams };

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

const fetchMovies = async (endpoint: string, category: Category, additionalParams: Record<string, any> = {}) => {
    try {
        const params = getParams(category, additionalParams);
        const response = await api.get(endpoint, { params });
        return response.data.results;
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
