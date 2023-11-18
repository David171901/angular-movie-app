import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GenresResponse } from 'src/app/core/models/genres.model';
import { MoviesResponse } from 'src/app/core/models/movies.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private apiUrl = 'assets/data'; 
  constructor(private http: HttpClient) { }
  
  getMovies(): Observable<MoviesResponse> {
    return this.http.get<MoviesResponse>(`${this.apiUrl}/movies.json`);
  }
  
  getGenres(): Observable<GenresResponse> {
    return this.http.get<GenresResponse>(`${this.apiUrl}/genres.json`);
  }
}