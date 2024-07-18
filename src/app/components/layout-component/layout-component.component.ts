import { Component } from '@angular/core';
import { SideappsComponent } from '../sideapps/sideapps.component';
import { HeaderComponent } from '../header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout-component',
  standalone: true,
  imports: [SideappsComponent, HeaderComponent, RouterOutlet],
  templateUrl: './layout-component.component.html',
  styleUrl: './layout-component.component.scss',
})
export class LayoutComponentComponent {}
