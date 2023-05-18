import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent {
  openedOne = 0;
  items = [
    {
      title: 'what do you do when I come for?',
      content: 'Hit you in the face.',
    },
    {
      title: 'what do you do when go home?',
      content: 'I eat like someone who didnt eat.',
    },
    { title: 'When the sun is come out?', content: 'In the day.' },
  ];
  onClick(i: number) {
    if (i === this.openedOne) {
      this.openedOne = -1;
    } else {
      this.openedOne = i;
    }
  }
}
