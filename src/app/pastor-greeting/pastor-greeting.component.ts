import { Component, OnInit } from '@angular/core';
import { routeTransitionAnimations } from 'src/animations/route-animations';

@Component({
  selector: 'app-pastor-greeting',
  templateUrl: './pastor-greeting.component.html',
  styleUrls: ['./pastor-greeting.component.css'],
  animations: [routeTransitionAnimations],
})
export class PastorGreetingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
