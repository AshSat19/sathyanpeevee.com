import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { gallery, faces, food, interiors, landscapes } from '../gallery/gallery.data';
import { PreviewDialogComponent } from './preview-dialog/preview-dialog.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, AfterViewInit {

  images: any;
  faces: any;
  food: any;
  interiors: any;
  landscapes: any;
  slideIndex: number;

  constructor(private dialog: MatDialog, private titleService: Title) {
    this.images = gallery;
    this.faces = faces;
    this.food = food;
    this.interiors = interiors;
    this.landscapes = landscapes;
    this.slideIndex = 0;
    titleService.setTitle('Image Gallery | SathianPeeVee: Professional Photographer and Videographer in Muscat, Oman');
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.showSlides(this.slideIndex);
    setInterval(() => {
      this.plusSlides(1);
    }, 5000);
  }

  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n) {
    let i;
    const slides = document.getElementsByClassName('mySlides') as HTMLCollectionOf<Element>;
    if (n > slides.length) {
      this.slideIndex = 0;
    }
    if (n < 0) {
      this.slideIndex = slides.length - 1;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i]['style'].display = 'none';
    }

    slides[this.slideIndex]['style'].display = 'block';
  }

  openPreviewDialog(category, index) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    switch (category) {
      case 'all':
        dialogConfig.data = this.images[index];
        break;
      case 'faces':
        dialogConfig.data = this.faces[index];
        break;
      case 'food':
        dialogConfig.data = this.food[index];
        break;
      case 'interiors':
        dialogConfig.data = this.interiors[index];
        break;
      case 'landscapes':
        dialogConfig.data = this.landscapes[index];
        break;
    }
    dialogConfig.maxWidth = '90vw';
    dialogConfig.maxWidth = '90vh';
    dialogConfig.closeOnNavigation = true;

    this.dialog.open(PreviewDialogComponent, dialogConfig);
  }
}
