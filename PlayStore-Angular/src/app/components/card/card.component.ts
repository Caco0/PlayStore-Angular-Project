import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input()
  gameImage: string = '';
  @Input()
  gameLabel: string = '';
  @Input()
  gameMedia: string = 'Media digital PS5';
  @Input()
  gamePrice: string = 'R$ 249,99';
  constructor() {}

  ngOnInit(): void {}
}
