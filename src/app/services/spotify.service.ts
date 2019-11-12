import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  // Con esta propiedad no es necesario importar el servicio en app.module
  providedIn: 'root'
})
export class SpotifyService {

  apiUrl = 'https://api.spotify.com/v1/';
  bearer = 'BQBZTOPXc6xMPkUJw0-57B3oj0TY4WMMW1ML2goQ-yXotoXieUPtQE6RQI5iWgoBp48uHaZAdnu569BCKTg';

  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const url = `${this.apiUrl}${query}`;

    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.bearer}`
    });

    return this.http.get(url, { headers });
  }


  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20')
       .pipe(map(data => data['albums'].items));
  }


  getArtistas(termino: string) {
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
      .pipe(map(data => data['artists'].items));
  }

  getArtista(id: string) {
    return this.getQuery(`artists/${ id }`);
      //.pipe(map(data => data['artists'].items));
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
      .pipe(map(data => data['tracks']));
  }

}
