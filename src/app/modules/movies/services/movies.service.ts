import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GenresResponse } from 'src/app/core/models/genres.model';
import { MoviesResponse } from 'src/app/core/models/movies.model';
import { MovieDetailResponse } from '@core/models/movieDetail.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private apiUrl = 'assets/data'; 
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${environment.accessTokenMoviedb}`
    })
  };
  
  getMovies(): Observable<MoviesResponse> {
    return this.http.get<MoviesResponse>(`${this.apiUrl}/movies.json`);
  }
  
  getGenres(): Observable<GenresResponse> {
    return this.http.get<GenresResponse>(`${this.apiUrl}/genresMovie.json`);
  }

  getMovieDetails(movieId: string): Observable<MovieDetailResponse> {
    return this.http.get<MovieDetailResponse>(`${environment.moviedbApiUrl}/movie/${movieId}?language=en-US`, this.httpOptions);
  }
}