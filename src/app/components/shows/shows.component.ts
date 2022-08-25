import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';



@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {
  shows: any = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getShows().subscribe((shows) => (this.shows = shows));
    

  }

}
