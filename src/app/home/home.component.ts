import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Song } from '../song';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


export class HomeComponent implements OnInit{
  songs: Song[] | undefined;
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http.get<Song[]>('assets/data.json') // Adjust the path if needed
      .subscribe(data => {
        this.songs = data;
      });
  }
}
