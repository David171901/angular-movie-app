import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetailResponse } from '@core/models/movieDetail.model';
import { MoviesService } from '@modules/movies/services/movies.service';

@Component({
  selector: 'app-movie-detail-page',
  templateUrl: './movie-detail-page.component.html'
})
export class MovieDetailPageComponent implements OnInit {
  movieDetail!: MovieDetailResponse;
  isLoading: boolean = true;
  hasError: boolean = false;

  constructor(private _moviesService: MoviesService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('movieId') || '';
    this._moviesService.getMovieDetails(getParamId).subscribe({
      next: (result) => {
        this.movieDetail = result;
      },
      error: (error) => {
        console.error(error)
        this.hasError = true;
      },
      complete: () => {
        this.isLoading = false; 
      }
    })
  }
}
