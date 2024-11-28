import { Component } from '@angular/core';

import { QualificationFormComponent } from '../qualification-form/qualification-form.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [QualificationFormComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isAdding = false;

  onAdding() {
    this.isAdding = true;
  }

  onClosing() {
    this.isAdding = false;
  }
}
