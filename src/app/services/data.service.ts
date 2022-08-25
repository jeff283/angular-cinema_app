import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private showsApi = 'http://localhost:8000/api/shows';
  private showtimesApi = 'http://localhost:8000/api/showtimes';
  private moviesApi = 'http://localhost:8000/api/movies';

  constructor(private http: HttpClient) { }

  getShows(): Observable<any>{
    return this.http.get(this.showsApi);
  }

  getMovies(): Observable<any>{
    return this.http.get(this.moviesApi);
  }

  getMovie(movie: any): Observable<any>{
    const url = `${this.moviesApi}/${movie.movie_ID}`;
    return this.http.get(url);
  }
  
  getShowtimes(): Observable<any>{
    return this.http.get(this.showtimesApi);
  }

  getShowtime(showtime: any): Observable<any>{
    const url = `${this.showtimesApi}/${showtime.showtime_ID}`;
    return this.http.get(url);
  }
  
  addShowtime(showtime: any): Observable<any>{
    return this.http.post(this.showtimesApi, showtime, httpOptions);
  }
  
  updateShowtime(showtime: any): Observable<any>{
    const url = `${this.showtimesApi}/${showtime.showtime_ID}`;
    return this.http.put(url, showtime, httpOptions);
  }
  
  deleteShowtime(showtime: any): Observable<any>{
    const url = `${this.showtimesApi}/${showtime.showtime_ID}`;
    return this.http.delete(url);
  }


}
