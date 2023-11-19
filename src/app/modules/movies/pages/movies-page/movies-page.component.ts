import { Component, OnInit } from '@angular/core';
import { Genre, GenresResponse } from '@core/models/genres.model';
import { Movie, MoviesResponse } from '@core/models/movies.model';
import { MoviesService } from '@modules/movies/services/movies.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html'
})
export class MoviesPageComponent implements OnInit{
  movies: Movie[] = [];
  filteredMovies: Movie[] = [];
  genres: Genre[] = [];
  selectedGenres: number[] = [];
  searchTerm: string = '';
  searchTermByDescription: string = '';
  isLoading: boolean = true;
  hasError: boolean = false;

  constructor(private _moviesService: MoviesService) { }

  ngOnInit(): void {
    const movies$ = this._moviesService.getMovies();
    const genres$ = this._moviesService.getGenres();

    forkJoin({ movies: movies$, genres: genres$ }).subscribe({
      next: (data: { movies: MoviesResponse, genres: GenresResponse }) => {
        this.movies = data.movies.results;
        this.filteredMovies = data.movies.results;
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

  filterMovies() {
    this.filteredMovies = this.movies.filter(movie => {
      const matchTitle = movie.title.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchDescription = movie.overview.toLowerCase().includes(this.searchTermByDescription.toLowerCase());
      const matchGenre = this.selectedGenres.length === 0 || this.selectedGenres.some(g => movie.genre_ids!.includes(g));
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
    this.filterMovies();
  }
}
