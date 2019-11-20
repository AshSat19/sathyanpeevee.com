import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  currentYear: string;

  constructor() {}

  ngOnInit() {
    const today = new Date();
    this.currentYear = today.getFullYear().toString();
  }

}
