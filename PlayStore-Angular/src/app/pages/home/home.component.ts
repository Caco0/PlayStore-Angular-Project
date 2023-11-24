import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @Input()
  bannerImage: string = '';
  @Input()
  bannerTitle: string = '';
  constructor() {}

  ngOnInit(): void {}
}
