import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router, ActivatedRoute  } from '@angular/router';



@Component({
  selector: 'app-edit-showtime',
  templateUrl: './edit-showtime.component.html',
  styleUrls: ['./edit-showtime.component.css']
})
export class EditShowtimeComponent implements OnInit {
  movies: any = [];
  movie_ID: any = -1
  showtime_ID: any =-1;
  movie: any ="";
  time: any ="";
  location: any ="";


  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.dataService.getMovies().subscribe((movies) => {this.movies = movies});
    this.movie_ID = this.route.snapshot.queryParamMap.get('movie_ID');
    this.showtime_ID = this.route.snapshot.queryParamMap.get('showtime_ID');
    this.movie = this.route.snapshot.queryParamMap.get('title');
    this.time = this.route.snapshot.queryParamMap.get('time');
    this.location = this.route.snapshot.queryParamMap.get('location');
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
      showtime_ID:this.showtime_ID,
      movie_ID:this.movie,
      time: this.time,
      location: this.location
    };

    this.dataService.updateShowtime(showtime).subscribe((showtime) => {this.movie=''; this.time=''; this.location=''; this.goToShowtime();} );
  }


}
