import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { Section1Component } from './section-1/section-1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, Section1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'landing-page';
}
