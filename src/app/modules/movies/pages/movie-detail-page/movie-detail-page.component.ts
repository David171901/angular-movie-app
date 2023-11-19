import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';
import { MovieDetailResponse } from 'src/app/core/models/moviesDetail.model';

@Component({
  selector: 'app-movie-detail-page',
  templateUrl: './movie-detail-page.component.html',
  styleUrls: ['./movie-detail-page.component.css']
})
export class MovieDetailPageComponent {
  movieDetail!: MovieDetailResponse;

  constructor(private _moviesService: MoviesService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('movieId') || '';
    this._moviesService.getMovieDetails(getParamId).subscribe((data) => {
      this.movieDetail = data
    })

  }
}
