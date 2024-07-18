import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
// import {
//   CHANGE_COPY_ICON_DELAY,
//   COPY_ICON,
//   COPY_ICON_TITLE,
//   DONE_ICON,
//   DONE_ICON_TITLE,
// } from '@capital/constants';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  // @Input() public contactIcon: string;
  // @Input() public contactName: string;
  // @Input() public contactUrl: string;
  // @Input() public contactUrlDescription: string;
  // @Input() public isEmail: boolean;
  // protected copyClick$: Observable<boolean>;
  // protected readonly copyIcon: string = COPY_ICON;
  // protected readonly doneIcon: string = DONE_ICON;
  // protected readonly copyIconTitle: string = COPY_ICON_TITLE;
  // protected readonly doneIconTitle: string = DONE_ICON_TITLE;
  // private copyClickSource: Subject<void> = new Subject<void>();
  // public ngOnInit(): void {
  //   this.copyClick$ = this.copyClickSource.pipe(
  //     switchMap(() =>
  //       timer(CHANGE_COPY_ICON_DELAY).pipe(
  //         map(() => false),
  //         startWith(true)
  //       )
  //     ),
  //     startWith(false)
  //   );
  // }
  // protected async copyContact(event: Event): Promise<void> {
  //   event.stopPropagation();
  //   this.copyClickSource.next();
  //   await this.copyTextToClipboard();
  // }
  // protected openUrl(): void {
  //   window.open(this.contactUrl, this.isEmail ? null : '_blank');
  // }
  // protected async copyTextToClipboard(): Promise<void> {
  //   await navigator.clipboard.writeText(
  //     this.isEmail ? this.contactUrlDescription : this.contactUrl
  //   );
  // }
}
