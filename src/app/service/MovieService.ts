import { Movie } from '../types/Movie';
import { RequestOptions, apiRequest } from './ApiRequest';

export interface ApiQueryParameters {
  [key: string]: string | number | boolean;
}

export async function searchMovies(title: string = '', genre: string = '', options?: RequestOptions): Promise<Movie[]> {
  const query: Record<string, string> = {
    title_like: title,
  };

  if (genre) {
    query.genres_like = genre;
  }
  return apiRequest<Movie[]>('movies', query, options);
}

export async function getMovieById(id: string): Promise<Movie> {
  return apiRequest(`movies/${encodeURIComponent(id)}`);
};

export async function getFeaturedMovies(id: string): Promise<Movie> {
  return apiRequest(`featured/${id}`);
};

export async function getMoviesByGenre(genre: string,options?: RequestOptions): Promise<Movie[]> {
  return apiRequest('movies', { genres_like: encodeURIComponent(genre) }, options);
};