import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: any = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getMovies().subscribe((movies) => {this.movies = movies});
  }

}
