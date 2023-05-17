import { Component } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
})
export class StatisticsComponent {
  states = [
    { value: 22, label: '# of cops' },
    { value: 550, label: 'we robbed' },
    { value: 440, label: 'pizza' },
  ];
}
