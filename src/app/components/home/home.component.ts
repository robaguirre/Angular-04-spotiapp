import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

/* Ejemplo de obtener datos de paises por GET
  paises: any[] = [];
  // Creamos el constructor que hace la peticon. Para ello quien necesoite los datos debe suscribirse.
  constructor(private http: HttpClient) {
    this.http.get('https://restcountries.eu/rest/v2/lang/es')
    .subscribe( (data: any) => {
      this.paises = data;
    });
  }
*/

  nuevasCanciones: any[] = [];

  constructor(private spotify: SpotifyService) {
      this.spotify.getNewReleases().subscribe((data: any) => {
      console.log(data.albums.items);
      this.nuevasCanciones = data.albums.items;
      });
  }

  ngOnInit() {
  }

}
