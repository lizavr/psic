import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent as ExampleComponent } from './exqmple/ExampleComponent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ExampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'zoneless-app';
}
