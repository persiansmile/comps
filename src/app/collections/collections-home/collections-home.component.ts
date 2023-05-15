import { Component } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent {
  data!: [
    { name: 'davood'; age: 14; job: 'modifier'; kare: 'Med' },
    { name: 'amin'; age: 24; job: 'advisor'; kare: 'High' },
    { name: 'javad'; age: 25; job: 'anihilator'; kare: 'Low' }
  ];
  headers!: [
    { key: 'name'; label: 'Name' },
    { key: 'kare'; label: 'Kare' },
    { key: 'age'; label: 'Age' },
    { key: 'job'; label: 'Job' }
  ];
  // hgjj
}
