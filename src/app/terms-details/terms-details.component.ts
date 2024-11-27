import { Component, inject } from '@angular/core';

import { RoutesService } from '../routes.service';

@Component({
  selector: 'app-terms-details',
  standalone: true,
  imports: [],
  templateUrl: './terms-details.component.html',
  styleUrl: './terms-details.component.css',
})
export class TermsDetailsComponent {
  routesService = inject(RoutesService);

  onBack() {
    this.routesService.backHome();
  }
}
