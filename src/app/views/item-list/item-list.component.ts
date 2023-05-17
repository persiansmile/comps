import { Component } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent {
  items = [
    {
      image: '/assets/images/couch.jpeg',
      title: 'couch',
      description: 'I coaching a coach on th cough',
    },
    {
      image: '/assets/images/dresser.jpeg',
      title: 'dresser',
      description: 'I dressed a dresser a dress',
    },
  ];
}
