import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  @Input()
  carouselTitle: string = '';

  slides: string[];
  i: number;

  constructor() {
    this.i = 0;
    this.slides = [
      '../../../assets/icons/card-17.webp',
      '../../../assets/icons/card-16.webp',
      '../../../assets/icons/card-15.webp',
    ];
  }
  getSlide() {
    return this.slides[this.i];
  }
  getPrev() {
    this.i === 0 ? (this.i = this.slides.length - 1) : this.i--;
  }
  getNext() {
    this.i < this.slides.length - 1 ? this.i++ : (this.i = 0);
  }

  ngOnInit(): void {}
}
