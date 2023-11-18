import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/core/models/movies.model';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html'
})
export class MovieCardComponent {
  @Input() data!: Movie;
}
