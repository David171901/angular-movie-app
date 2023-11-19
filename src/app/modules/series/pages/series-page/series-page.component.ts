import { Component } from '@angular/core';
import { Genre, GenresResponse } from '@core/models/genres.model';
import { Serie, SeriesResponse } from '@core/models/series.model';
import { SeriesService } from '@modules/series/services/series.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-series-page',
  templateUrl: './series-page.component.html'
})
export class SeriesPageComponent {
  series: Serie[] = [];
  filteredSeries: Serie[] = [];
  genres: Genre[] = [];
  selectedGenres: number[] = [];
  searchTerm: string = '';
  searchTermByDescription: string = '';
  isLoading: boolean = true;
  hasError: boolean = false;

  constructor(private _seriesService: SeriesService) { }

  ngOnInit(): void {
    const series$ = this._seriesService.getSeries();
    const genres$ = this._seriesService.getGenres();

    forkJoin({ series: series$, genres: genres$ }).subscribe({
      next: (data: { series: SeriesResponse, genres: GenresResponse }) => {
        this.series = data.series.results;
        this.filteredSeries = data.series.results;
        this.genres = data.genres.genres;
      },
      error: (error) => {
        console.error(error)
        this.hasError = true;
      },
      complete: () => {
        this.isLoading = false; 
      }
    });
  }

  filterSeries() {
    this.filteredSeries = this.series.filter(serie => {
      const matchTitle = serie.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchDescription = serie.overview.toLowerCase().includes(this.searchTermByDescription.toLowerCase());
      const matchGenre = this.selectedGenres.length === 0 || this.selectedGenres.some(g => serie.genre_ids!.includes(g));
      return matchTitle && matchGenre && matchDescription;
    });
  }

  onGenreChange(genre: number, event: any) {
    if (event.target.checked) {
      this.selectedGenres.push(genre);
    } else {
      const index = this.selectedGenres.indexOf(genre);
      if (index !== -1) {
        this.selectedGenres.splice(index, 1);
      }
    }
    this.filterSeries();
  }
}
