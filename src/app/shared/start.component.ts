import { Component, EventEmitter, Input, OnChanges, Output } from "@angular/core";

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
  @Input() rating: number = 0;
  cropWidth: number = 75;
  //A child/nested component can only pass data to a container/parent component by emitting an event. Defined with an EventEmitter object.
  //When creating an EventEmitter the generic argument identifies the type of data that is passed with the event. We can specity any value including an object.
  //In the container component template, we use event binding to bind to the StarComponent's notify event.
  @Output() notify: EventEmitter<string> = new EventEmitter<string>()

  ngOnChanges(): void {
    this.cropWidth = this.rating * 75 / 5;
  }
  onClick(): void {
    this.notify.emit(this.rating.toString());
    console.log(`Star Component Logging Click. This is the rating ${this.rating}`)
  }
}
