import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { Subject, interval } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-child',
  imports: [AsyncPipe],

  // template: '<div>Current value: {{ currentSignal() }}</div>',

  template:
    '<div>Current value: {{ count()}}</div> <button (click)="increment()">vbn</button>',
  //использование асинк пайп
  // template: '<div>Async pipe: {{ currentValue$ | async }}</div>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
// not change count надо дергать через  this.cdr.markForCheck();

// export class ChildComponent implements OnInit {
//   public currentValue = 0;

//   ngOnInit(): void {
//     setTimeout(() => {
//       this.currentValue += 1;
//     }, 1000);
//   }
// }

//дергаем через  this.cdr.markForCheck();

// export class ChildComponent implements OnInit {
//   // private changeDetectorRef = inject(ChangeDetectorRef);
//   constructor(private cdr: ChangeDetectorRef) {}
//   public currentValue = 0;

//   ngOnInit(): void {
//     setTimeout(() => {
//       this.currentValue += 1;
//       this.cdr.markForCheck();
//     }, 1000);
//   }
// }

//signals
export class ChildComponent {
  //   public currentSignal = signal(0);
  //   ngOnInit(): void {
  //     setTimeout(() => {
  //       this.currentSignal.set(1);
  //     }, 1000);
  //   }
  // }
  private incrementSubject = new Subject<void>();
  count = signal(0);

  constructor() {
    this.incrementSubject.subscribe(() => {
      this.count.set(this.count() + 1);
    });
  }

  increment() {
    this.incrementSubject.next();
  }
}
// pipe
// export class ChildComponent {
//   public currentValue$ = interval(1000);
// }
