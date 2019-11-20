import { Component, OnInit } from '@angular/core';
import { whatsNew } from '../gallery/gallery.data';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  whatsNew: any;

  constructor(private titleService: Title) {
    this.whatsNew = whatsNew;
    titleService.setTitle('Home | SathianPeeVee: Professional Photographer and Videographer in Muscat, Oman');
  }

  ngOnInit() {
  }

  explore() {
    document.getElementById('what-new').scrollIntoView({
      behavior: 'smooth'
    });
  }
}
