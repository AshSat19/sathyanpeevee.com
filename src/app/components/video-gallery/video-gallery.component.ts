import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-video-gallery',
  templateUrl: './video-gallery.component.html',
  styleUrls: ['./video-gallery.component.css']
})
export class VideoGalleryComponent implements OnInit {

  constructor(private titleService: Title) {
    titleService.setTitle('Video Gallery | SathianPeeVee: Professional Photographer and Videographer in Muscat, Oman');
  }

  ngOnInit() {}

}
