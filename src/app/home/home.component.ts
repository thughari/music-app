import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Song } from '../song';
import { PlaybackService } from '../playback.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  songsByAlbum: { [album: string]: Song[] } = {};
  playbackService: PlaybackService = new PlaybackService;
  currentSong: any;

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
  // ... in your song list component
  playSong(song: any) {
    this.playbackService.playSong(song);
    this.currentSong=song;
  }
  getAlbums(): string[] {
    return Object.keys(this.songsByAlbum);
  }

  getBackgroundImage(album: string): string {
    const songs = this.songsByAlbum[album];
    if (songs && songs.length > 0) {
      return songs[0].backgroundImage; // Assuming the first song of the album represents the album's background image
    }
    return ''; // Return empty string if no background image is found
  }
  
}
