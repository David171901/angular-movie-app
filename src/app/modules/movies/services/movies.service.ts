import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GenresResponse } from 'src/app/core/models/genres.model';
import { MoviesResponse } from 'src/app/core/models/movies.model';
import { MovieDetailResponse } from '@core/models/movieDetail.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private apiUrl = 'assets/data'; 
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMGU1NGNlNDdjYTlkMWNiZGZkYmQyYjUxMWY4OGUwYyIsInN1YiI6IjY1NTVhZDI2YWE2NTllMDBhZGEzZWQ5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0n-eDtEV_LE8WtY4u4Xa6CW0FzVUmiC4EqP0SIRLtE0'
    })
  };
  
  getMovies(): Observable<MoviesResponse> {
    return this.http.get<MoviesResponse>(`${this.apiUrl}/movies.json`);
  }
  
  getGenres(): Observable<GenresResponse> {
    return this.http.get<GenresResponse>(`${this.apiUrl}/genresMovie.json`);
  }

  getMovieDetails(movieId: string): Observable<MovieDetailResponse> {
    return this.http.get<MovieDetailResponse>(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, this.httpOptions);
  }
}