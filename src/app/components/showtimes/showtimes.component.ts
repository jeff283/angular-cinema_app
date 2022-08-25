import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showtimes',
  templateUrl: './showtimes.component.html',
  styleUrls: ['./showtimes.component.css']
})
export class ShowtimesComponent implements OnInit {
  showtimes: any = [];

  constructor(private dataService: DataService,private router: Router) { }

  ngOnInit(): void {
    this.dataService.getShowtimes().subscribe((showtimes) => (this.showtimes = showtimes));
  }

  onDelete(showtime: any){
    this.dataService.deleteShowtime(showtime).subscribe(
      () => (this.showtimes = this.showtimes.filter(
        (t: any) => t.showtime_ID !== showtime.showtime_ID
      ) )
      );
  }

  onEdit(showtime: any){
    this.router.navigate(['/editshowtime'],
                          {queryParams:showtime});
  }

}
