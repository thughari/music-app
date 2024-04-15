import { Component, Input } from '@angular/core';
import { PlaybackService } from '../playback.service';

@Component({
  selector: 'app-player-bar',
  templateUrl: './player-bar.component.html',
  styleUrls: ['./player-bar.component.css']
})
export class PlayerBarComponent {
  @Input() currentSong: any;
  @Input() nextSong: any;
  @Input() previousSong: any;
  
  playbackService: PlaybackService = new PlaybackService;
  volumeIcon: string = 'volume_up'; // Default volume icon
  volume: any; // Default volume
  progress: number = 0; // Default progress
  duration: string = '0:00'; // Default duration
  elapsedTime: string = '0:00'; // Default elapsed time
  isPlaying: boolean = false; // Default playback state
  isRepeating: boolean = false; // Default repeat state
  isShuffled: boolean = false; // Default shuffle state

  // Play the next song
  playNextSong() {
    this.currentSong = this.nextSong;
    // Play the next song logic here
    this.playbackService.playSong(this.currentSong)
  }

  // Toggle mute
  toggleMute() {
    if (this.volume > 0) {
      this.volumeIcon = 'volume_off';
      this.volume = 0;
    } else {
      this.volumeIcon = 'volume_up';
      // Set volume to previous value or default
    }
    // Update volume logic here
  }

  // Seek to a specific position in the song
  seek(event: any) {
    const newPosition = event.value;
    // Seek logic here
  }

  // Toggle repeat
  toggleRepeat() {
    this.isRepeating = !this.isRepeating;
    // Toggle repeat logic here
  }

  // Toggle play/pause
  togglePlayPause() {
    this.isPlaying = !this.isPlaying;
    if (this.isPlaying) {
      // Play logic here
    } else {
      // Pause logic here
    }
  }

  // Toggle shuffle
  toggleShuffle() {
    this.isShuffled = !this.isShuffled;
    // Toggle shuffle logic here
  }
}
