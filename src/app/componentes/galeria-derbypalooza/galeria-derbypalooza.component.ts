import { Component, OnInit } from '@angular/core';
import { Image, AccessibilityConfig } from 'angular-modal-gallery';
import { ImageLoadEvent } from 'angular-modal-gallery/src/components/current-image/current-image.component';


@Component({
  selector: 'app-galeria-derbypalooza',
  templateUrl: './galeria-derbypalooza.component.html',
  styleUrls: ['./galeria-derbypalooza.component.css']
})
export class GaleriaDerbypaloozaComponent implements OnInit {

  ngOnInit() {  }

  imageIndex = 1;
  galleryId = 1;
  autoPlay = true;
  showArrows = true;
  showDots = true;

  imagesRect: Image[] = [
    new Image(
      0,
      {
        img: '../../../assets/imagenes/piedra.jpg',
        description: 'Description 1'
      },
      {
        img: '../../../assets/imagenes/papel.jpg',
        title: 'First image title',
        alt: 'First image alt',
        ariaLabel: 'First image aria-label'
      }
    ),
    new Image(1, { img: '/assets/images/gallery/pexels-photo-47223.jpeg' }, { img: '/assets/images/gallery/thumbs/t-pexels-photo-47223.jpg' }),
    new Image(
      2,
      {
        img: '/assets/images/gallery/pexels-photo-52062.jpeg',
        description: 'Description 3',
        title: 'Third image title',
        alt: 'Third image alt',
        ariaLabel: 'Third image aria-label'
      },
      {
        img: '/assets/images/gallery/thumbs/t-pexels-photo-52062.jpg',
        description: 'Description 3'
      }
    ),
  
  ];

  

  addRandomImage() {
    const imageToCopy: Image = this.imagesRect[Math.floor(Math.random() * this.imagesRect.length)];
    const newImage: Image = new Image(this.imagesRect.length - 1 + 1, imageToCopy.modal, imageToCopy.plain);
    this.imagesRect = [...this.imagesRect, newImage];
  }

  onChangeAutoPlay() {
    this.autoPlay = !this.autoPlay;
  }

  onChangeShowArrows() {
    this.showArrows = !this.showArrows;
  }

  onChangeShowDots() {
    this.showDots = !this.showDots;
  }

  // output evets
  onShow(event: ImageLoadEvent) {
    console.log('show', event);
  }

  onFirstImage(event: ImageLoadEvent) {
    console.log('firstImage', event);
  }

  onLastImage(event: ImageLoadEvent) {
    console.log('lastImage', event);
  }
}