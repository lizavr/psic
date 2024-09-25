import { Component, Input } from '@angular/core';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { HighlightDirective } from '../../directives/appHighlight.directive';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CardComponent, FormsModule, NgFor, HighlightDirective],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  messageForCard: string = ' hello,card';
  count: number = 0;
  name: string = '';
  items: string[] = ['lk', 'dfg'];
  color = '';

  @Input() item: any;

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

  setUppercaseName(value: string) {
    this.name = value.toUpperCase();
  }
}
