import { Component, OnInit } from '@angular/core';
import { teachings } from '../../assets/js/teachings';
import { trigger, transition, style, animate } from '@angular/animations';
import { fadeInAnimation } from 'src/animations/route-animations';

@Component({
  selector: 'app-doctrinal-statement',
  templateUrl: './doctrinal-statement.component.html',
  styleUrls: ['./doctrinal-statement.component.css'],
  animations: [fadeInAnimation],
})
export class DoctrinalStatementComponent implements OnInit {
  public doctrines: any;
  constructor() {}

  ngOnInit(): void {
    this.doctrines = teachings;
  }
}
