import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  // Con esta propiedad no es necesario importar el servicio en app.module
  providedIn: 'root'
})
export class SpotifyService {

  bearer = 'BQDYA6L5jiuFVIbD1GI231hj0ZkPek_-PMuBeaS5wQjiH8Xtu_vqcmHDiOFyu6Rj8t1XSyuXK9gZdoI3gmU';

  constructor(private http: HttpClient) {
    console.log('Servicio spotify listo');
  }

  getNewReleases() {

    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.bearer}`
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers });
  }

  getArtista(termino: string) {

    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.bearer}`
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers });

  }
}
