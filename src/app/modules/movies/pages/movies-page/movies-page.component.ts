import { Component } from '@angular/core';
import { Movie, MoviesResponse } from 'src/app/core/models/movies.model';
import { MovieService } from 'src/app/shared/services/movie.service';
import { MoviesService } from '../../services/movies.service';
import { Genre, GenresResponse } from 'src/app/core/models/genres.model';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css']
})
export class MoviesPageComponent {
  movies: Movie[] = [];
  filteredMovies: Movie[] = [];
  genres: Genre[] = [];
  selectedGenres: number[] = [];
  searchTerm: string = '';
  isLoading: boolean = true;

  constructor(private _moviesService: MoviesService) { }

  ngOnInit(): void {
    const movies$ = this._moviesService.getMovies();
    const genres$ = this._moviesService.getGenres();

    forkJoin({ movies: movies$, genres: genres$ }).subscribe({
      next: (data: { movies: MoviesResponse, genres: GenresResponse }) => {
        this.movies = data.movies.results;
        this.filteredMovies = data.movies.results;
        this.genres = data.genres.genres;
        this.isLoading = false;
      },
      error: (error) => {
      
      },
      complete: () => {
        this.isLoading = false; 
      }
    });
  }

  filterMovies() {
    this.filteredMovies = this.movies.filter(movie => {
      const matchTitle = movie.title.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchGenre = this.selectedGenres.length === 0 || this.selectedGenres.some(g => movie.genre_ids!.includes(g));
      return matchTitle && matchGenre;
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
