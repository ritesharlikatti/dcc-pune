import { Component, OnInit } from '@angular/core';
import { routeTransitionAnimations } from 'src/animations/route-animations';
import { sermonData } from '../../assets/js/sermons';

@Component({
  selector: 'app-sermons',
  templateUrl: './sermons.component.html',
  styleUrls: ['./sermons.component.css'],
  animations: [routeTransitionAnimations],
})
export class SermonsComponent implements OnInit {
  sermons: any;
  filteredSermons: any;
  selectedPreacher = '';
  selectedSeries = '';
  selectedTopic = '';
  selectedBook = '';
  preachers: any;
  books: any;
  topics: any;
  series: any;
  constructor() {}

  ngOnInit(): void {
    this.sermons = sermonData;
    this.filteredSermons = [...this.sermons];
    this.preachers = [
      ...new Set(this.sermons.map((s: { preacher: any }) => s.preacher)),
    ];
    this.books = [
      ...new Set(
        this.sermons.map((s: { passage: string }) => s.passage.split(' ')[0])
      ),
    ]; // Extracts Book name
  }
  // Filtering function
  filterSermons() {
    this.filteredSermons = this.sermons.filter(
      (s: any) =>
        (this.selectedPreacher ? s.preacher === this.selectedPreacher : true) &&
        (this.selectedSeries ? s.series === this.selectedSeries : true) &&
        (this.selectedTopic ? s.topic === this.selectedTopic : true) &&
        (this.selectedBook ? s.passage.includes(this.selectedBook) : true)
    );
  }

  // Reset all filters
  resetFilters() {
    this.selectedPreacher = '';
    this.selectedSeries = '';
    this.selectedTopic = '';
    this.selectedBook = '';
    this.filteredSermons = [...this.sermons];
  }
}
