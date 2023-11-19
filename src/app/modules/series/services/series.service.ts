import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenresResponse } from '@core/models/genres.model';
import { SerieResponseDetail } from '@core/models/serieDetail.model';
import { SeriesResponse } from '@core/models/series.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private apiUrl = 'assets/data'; 
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMGU1NGNlNDdjYTlkMWNiZGZkYmQyYjUxMWY4OGUwYyIsInN1YiI6IjY1NTVhZDI2YWE2NTllMDBhZGEzZWQ5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0n-eDtEV_LE8WtY4u4Xa6CW0FzVUmiC4EqP0SIRLtE0'
    })
  };
  
  getSeries(): Observable<SeriesResponse> {
    return this.http.get<SeriesResponse>(`${this.apiUrl}/series.json`);
  }
  
  getGenres(): Observable<GenresResponse> {
    return this.http.get<GenresResponse>(`${this.apiUrl}/genresTV.json`);
  }

  getSerieDetails(serieId: string): Observable<SerieResponseDetail> {
    return this.http.get<SerieResponseDetail>(`https://api.themoviedb.org/3/tv/${serieId}?language=en-US`, this.httpOptions);
  }
}
