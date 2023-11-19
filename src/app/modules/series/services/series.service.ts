import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenresResponse } from '@core/models/genres.model';
import { SerieResponseDetail } from '@core/models/serieDetail.model';
import { SeriesResponse } from '@core/models/series.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private apiUrl = 'assets/data'; 
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${environment.accessTokenMoviedb}`
    })
  };
  
  getSeries(): Observable<SeriesResponse> {
    return this.http.get<SeriesResponse>(`${this.apiUrl}/series.json`);
  }
  
  getGenres(): Observable<GenresResponse> {
    return this.http.get<GenresResponse>(`${this.apiUrl}/genresTV.json`);
  }

  getSerieDetails(serieId: string): Observable<SerieResponseDetail> {
    return this.http.get<SerieResponseDetail>(`${environment.moviedbApiUrl}/tv/${serieId}?language=en-US`, this.httpOptions);
  }
}
