import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from 'src/animations/route-animations';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
  animations: [fadeInAnimation],
})
export class AboutUsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
