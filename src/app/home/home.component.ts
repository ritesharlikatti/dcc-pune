import { Component, OnInit } from '@angular/core';
import { routeTransitionAnimations } from 'src/animations/route-animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [routeTransitionAnimations],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
