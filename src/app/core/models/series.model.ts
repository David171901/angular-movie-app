import { Movie, MoviesResponse } from './movies.model';

export interface Serie extends Movie {
  name: string;
}

export interface SeriesResponse {
  results: Serie[];
}