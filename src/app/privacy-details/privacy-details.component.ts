import { Component, inject } from '@angular/core';

import { RoutesService } from '../routes.service';

@Component({
  selector: 'app-privacy-details',
  standalone: true,
  imports: [],
  templateUrl: './privacy-details.component.html',
  styleUrl: './privacy-details.component.css',
})
export class PrivacyDetailsComponent {
  routesService = inject(RoutesService);

  onBack() {
    this.routesService.backHome();
  }
}
