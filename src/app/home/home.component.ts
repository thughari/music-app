import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Song } from '../song';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  songsByAlbum: { [album: string]: Song[] } = {};

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Song[]>('assets/data.json')
      .subscribe(data => {
        this.groupSongsByAlbum(data);
      });
  }

  groupSongsByAlbum(songs: Song[]): void {
    songs.forEach(song => {
      if (!this.songsByAlbum[song.album]) {
        this.songsByAlbum[song.album] = [];
      }
      this.songsByAlbum[song.album].push(song);
    });
  }

  getAlbums(): string[] {
    return Object.keys(this.songsByAlbum);
  }
}
