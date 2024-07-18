import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sideapps',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sideapps.component.html',
  styleUrl: './sideapps.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideappsComponent {}
