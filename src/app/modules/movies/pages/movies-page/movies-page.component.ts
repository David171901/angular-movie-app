import { Component } from '@angular/core';
import { Movie, MovieResponse } from 'src/app/core/models/movies.model';
import { MovieService } from 'src/app/shared/services/movie.service';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css']
})
export class MoviesPageComponent {
  movies: Movie[] = [];
  filteredMovies: Movie[] = [];
  genres: number[] = [];
  selectedGenres: number[] = [];
  searchTerm: string = '';

  constructor(private _moviesService: MoviesService) { }
  isLoading: boolean = true;

  ngOnInit(): void {
    this._moviesService.getMovies().subscribe((data: MovieResponse) => {
      this.movies = data.results;
      this.filteredMovies = data.results;
      this.extractGenres();
      this.isLoading = false;
    });
  }

  extractGenres() {
    this.movies.forEach(movie => {
      movie.genre_ids!.forEach((genre: number) => {
        if (!this.genres.includes(genre)) {
          this.genres.push(genre);
        }
      });
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
