import { DOCUMENT } from '@angular/common';
import {
  Directive,
  ElementRef,
  Output,
  EventEmitter,
  Inject,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { Subject, filter, fromEvent, takeUntil } from 'rxjs';

@Directive({
  selector: '[appClickOutside]',
  standalone: true,
})
export class ClickOutsideDirective implements AfterViewInit, OnDestroy {
  @Output() public clickOutside = new EventEmitter<void>();

  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    private element: ElementRef,
    @Inject(DOCUMENT) private document: Document
  ) {}

  public ngAfterViewInit(): void {
    fromEvent<MouseEvent>(this.document, 'click')
      .pipe(
        filter((event) => !this.isInside(event)),
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        this.clickOutside.emit();
      });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private isInside(event: MouseEvent): boolean {
    const elementRect = this.element.nativeElement.getBoundingClientRect();

    const scrollParent = this.getScrollParent(this.element.nativeElement);
    const scrollTop = scrollParent ? scrollParent.scrollTop : 0;

    const adjustedRect = {
      top: elementRect.top + scrollTop,
      left: elementRect.left,
      bottom: elementRect.bottom + scrollTop,
      right: elementRect.right,
    };

    const withinHorizontalBounds =
      event.clientX >= adjustedRect.left && event.clientX <= adjustedRect.right;
    const withinVerticalBounds =
      event.clientY >= adjustedRect.top && event.clientY <= adjustedRect.bottom;

    return withinHorizontalBounds && withinVerticalBounds;
  }

  private getScrollParent(element: HTMLElement): HTMLElement | null {
    if (!element) {
      return null;
    }

    const overflowY = window.getComputedStyle(element).overflowY;
    const isScrollable = overflowY !== 'visible' && overflowY !== 'hidden';

    if (isScrollable && element.scrollHeight > element.clientHeight) {
      return element;
    }

    return element.parentElement
      ? this.getScrollParent(element.parentElement)
      : null;
  }
}
