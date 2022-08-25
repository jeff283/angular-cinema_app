import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddShowtimeComponent } from './components/add-showtime/add-showtime.component';
import { EditShowtimeComponent } from './components/edit-showtime/edit-showtime.component';
import { MoviesComponent } from './components/movies/movies.component';
import { ShowsComponent } from './components/shows/shows.component';
import { ShowtimesComponent } from './components/showtimes/showtimes.component';

const routes: Routes = [
  {path: '', component: ShowsComponent},
  {path: 'movies', component: MoviesComponent},
  {path: 'showtimes', component: ShowtimesComponent},
  {path: 'addshowtime', component: AddShowtimeComponent},
  {path: 'editshowtime', component: EditShowtimeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
