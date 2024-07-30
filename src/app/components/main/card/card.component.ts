import {
  Component,
  EventEmitter,
  input,
  Input,
  output,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  likeCount = 0;
  comment = 'lala';

  @Input() CardMsg: string = '';

  @Output() likeEv = new EventEmitter();

  like() {
    this.likeEv.emit(this.likeCount++);
  }

  //18 version

  message = input<string>();

  notify = output<string>();

  send() {
    this.notify.emit(this.comment);
  }

  // likeEv = output<number>();
}
