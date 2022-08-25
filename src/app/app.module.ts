import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ShowsComponent } from './components/shows/shows.component';
import { MoviesComponent } from './components/movies/movies.component';
import { ShowtimesComponent } from './components/showtimes/showtimes.component';
import { AddShowtimeComponent } from './components/add-showtime/add-showtime.component';
import { EditShowtimeComponent } from './components/edit-showtime/edit-showtime.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShowsComponent,
    MoviesComponent,
    ShowtimesComponent,
    AddShowtimeComponent,
    EditShowtimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
