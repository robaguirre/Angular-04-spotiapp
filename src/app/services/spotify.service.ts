import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  // Con esta propiedad no es necesario importar el servicio en app.module
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Servicio spotify listo');
   }

   getNewReleases() {

      const headers = new HttpHeaders({
        Authorization: 'Bearer '
      });

      this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers }).subscribe((data: any) => {
        console.log(data);
      });
   }
}
