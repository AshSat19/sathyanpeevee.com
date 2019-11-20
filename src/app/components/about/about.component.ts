import { Component, OnInit } from '@angular/core';
import { clients } from './clients.data';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  clients: any;

  constructor(private titleService: Title) {
    this.clients = clients;
    titleService.setTitle('About Me | SathianPeeVee: Professional Photographer and Videographer in Muscat, Oman');
  }

  ngOnInit() {
  }

}
