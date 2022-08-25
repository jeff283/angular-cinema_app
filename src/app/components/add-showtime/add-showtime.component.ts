import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router  } from '@angular/router';


@Component({
  selector: 'app-add-showtime',
  templateUrl: './add-showtime.component.html',
  styleUrls: ['./add-showtime.component.css']
})
export class AddShowtimeComponent implements OnInit {
  movies: any = [];
  showtime_ID: number =-1;
  movie: string ="";
  time: string ="";
  location: string ="";


  constructor(private dataService: DataService, private router: Router) { }


  ngOnInit(): void {
    this.dataService.getMovies().subscribe((movies) => {this.movies = movies});
  }

  

  goToShowtime(){
    const navPage: string[] = ['/showtimes'];
    this.router.navigate(navPage);
  }

  onSubmit(){
    if (!this.location) {
      alert("Please add location");
      return;
    }
    const showtime: any = {
      movie_ID:this.movie,
      time: this.time,
      location: this.location
    };

    this.dataService.addShowtime(showtime).subscribe((showtime) => {this.movie=''; this.time=''; this.location=''; this.goToShowtime();} );
  }

}
