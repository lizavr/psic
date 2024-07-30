import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  messageForCard: string = ' hello,card';
  count: number = 0;

  recieve($event: number) {
    this.count = $event;
    console.log(this.count);
    console.log({ $event });
  }
  //18 version
  message: string = 'Hi';

  handleEvent($ev: string) {
    console.log($ev);
  }
}
