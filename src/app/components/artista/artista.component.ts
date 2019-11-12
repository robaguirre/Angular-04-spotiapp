import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent implements OnInit {

  artista: any;
  loadingArtist: boolean;
  topTracks: any[] = [];

  constructor(private router: ActivatedRoute, 
              private spotify: SpotifyService) {

    this.router.params.subscribe( params => {
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    });

    this.loadingArtist = true;
   }

  ngOnInit() {
  }

  getArtista(id: string) {

    this.loadingArtist = true;

    this.spotify.getArtista(id).subscribe((data: any) => {
      this.artista = data;
      this.loadingArtist = false;
    });
  }

  getTopTracks(id: string) {

    this.spotify.getTopTracks(id).subscribe((data: any) => {
      this.topTracks = data;
    });
  }

}
