import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { SupportPopupComponent } from '../support-popup/support-popup.component';
import { ClickOutsideDirective } from '../../directives/click-outside.directive';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, SupportPopupComponent, ClickOutsideDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  isSupportPopupOpen = signal<boolean>(false);

  protected toggleSupportPopup(event: Event): void {
    event.stopPropagation();
    this.isSupportPopupOpen.set(!this.isSupportPopupOpen());
  }

  protected closeSupportPopup(): void {
    this.isSupportPopupOpen.set(false);
  }
}
