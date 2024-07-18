import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SupportPopupComponent } from '../support-popup/support-popup.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, SupportPopupComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public isSupportPopupOpen: boolean = false;

  protected toggleSupportPopup(event: Event): void {
    event.stopPropagation();
    this.isSupportPopupOpen = !this.isSupportPopupOpen;
  }
}
