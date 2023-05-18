import {
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit, OnDestroy {
  @Output() close = new EventEmitter();
  //// we do this so modal show in th ceneter of page we saying this element is on the whole html body
  //// since we use angular and angular has nesting(show html in another html) we should do this
  constructor(private el: ElementRef) {}
  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }
  ngOnDestroy(): void {
    this.el.nativeElement.remove();
  }
  ///////////////////////////////////////////////
  onCloseClick() {
    this.close.emit();
  }
}
