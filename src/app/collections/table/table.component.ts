import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() classNames = '';
  data!: [
    { name: 'davood'; age: 14; job: 'modifier' },
    { name: 'amin'; age: 24; job: 'advisor' },
    { name: 'javad'; age: 25; job: 'anihilator' }
  ];
  headers!: [
    { key: 'name'; label: 'Name' },
    { key: 'age'; label: 'Age' },
    { key: 'job'; label: 'Job' }
  ];

  constructor() {}
  ngOnInit(): void {
    this.data = [
      { name: 'davood', age: 14, job: 'modifier' },
      { name: 'amin', age: 24, job: 'advisor' },
      { name: 'javad', age: 25, job: 'anihilator' },
    ];
    this.headers = [
      { key: 'name', label: 'Name' },
      { key: 'age', label: 'Age' },
      { key: 'job', label: 'Job' },
    ];
  }
}
