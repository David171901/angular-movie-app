import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SerieResponseDetail } from '@core/models/serieDetail.model';
import { SeriesService } from '@modules/series/services/series.service';

@Component({
  selector: 'app-serie-detail-page',
  templateUrl: './serie-detail-page.component.html'
})
export class SerieDetailPageComponent implements OnInit {
  movieDetail!: SerieResponseDetail;
  isLoading: boolean = true;
  hasError: boolean = false;

  constructor(private _seriesService: SeriesService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('serieId') || '';
    this._seriesService.getSerieDetails(getParamId).subscribe({
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
