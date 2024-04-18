import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Song } from './song'; 

@Injectable({
  providedIn: 'root'
})
export class PlaybackService {
  
  private currentSongSubject = new BehaviorSubject<Song | undefined>(undefined); 
  currentSong$ = this.currentSongSubject.asObservable();

  private isPlayingSubject = new BehaviorSubject<boolean>(false);
  isPlaying$ = this.isPlayingSubject.asObservable();

  audio: HTMLAudioElement;

  constructor() {
    this.audio = new Audio();
  }

  playSong(song: Song) {
    this.currentSongSubject.next(song);
    this.audio.src = song.musicPath; 
    this.audio.play();
    this.isPlayingSubject.next(true);
  }

  pauseSong() {
    this.audio.pause();
    this.isPlayingSubject.next(false);
  }

  nextSong(songs: Song[]) {
    const currentIndex = songs.indexOf(this.currentSongSubject.value!);
    const nextIndex = (currentIndex + 1) % songs.length;
    const nextSong = songs[nextIndex];
    this.playSong(nextSong);
  }

  previousSong(songs: Song[]) {
    const currentIndex = songs.indexOf(this.currentSongSubject.value!);
    const previousIndex = (currentIndex - 1 + songs.length) % songs.length;
    const previousSong = songs[previousIndex];
    this.playSong(previousSong);
  }

  // ... (Additional methods if needed)
}