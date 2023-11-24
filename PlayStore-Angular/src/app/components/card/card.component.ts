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
  gameMedia: string = '';
  @Input()
  gamePrice: string = '';
  constructor() {}

  ngOnInit(): void {}
}
