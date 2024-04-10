import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-player-bar',
  templateUrl: './player-bar.component.html',
  styleUrl: './player-bar.component.css'
})
export class PlayerBarComponent {
  @Input() currentSong : any;
volumeIcon: any;
volume: any;
toggleMute() {
throw new Error('Method not implemented.');
}
progress: any;
duration: any;
seek(arg0: any) {
throw new Error('Method not implemented.');
}
isRepeating: any;
elapsedTime: any;
toggleRepeat() {
throw new Error('Method not implemented.');
}
nextSong() {
throw new Error('Method not implemented.');
}
isPlaying: any;
togglePlayPause() {
throw new Error('Method not implemented.');
}
previousSong() {
throw new Error('Method not implemented.');
}
isShuffled: any;
toggleShuffle() {
throw new Error('Method not implemented.');
}

}
