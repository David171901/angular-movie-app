import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieResponse } from 'src/app/core/models/movies.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private apiUrl = '../../data/movies.json'; 
  constructor(private http: HttpClient) { }
  
  getMovies(): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(this.apiUrl);
  }
}
