import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { Section1Component } from './sections/section-1/section-1.component';
import { Section2Component } from './sections/section-2/section-2.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    Section1Component,
    Section2Component,
    FooterComponent,
    RouterModule,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'landing-page';
}
