// api key
const API_KEY = "02b8e4b0a144675e61f4c3d4d053360c";
const BASE_PATH = "https://api.themoviedb.org/3";

interface IMovie {
    id:number,
    backdrop_path: string;
    poster_path:string;
    overview:string;
    title:string;
}

export interface IGetMoviesResult {
    dates: {
        maximum:string;
        minimum:string;
    };
    page:number;
    results: IMovie[],
    total_pages: number;
    total_results: number;
}

export function getMovies() {
    return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then(
        response => response.json());
}