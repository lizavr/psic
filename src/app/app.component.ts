import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent as ExampleComponent } from './exqmple/ExampleComponent.component';
import { SnakeComponent } from './components/snake/snake.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ExampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'psic';
}
