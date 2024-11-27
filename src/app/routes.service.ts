import { inject, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RoutesService {
  route = inject(Router);
  activatedRoute = inject(ActivatedRoute);

  backHome() {
    this.route.navigate(['../'], { relativeTo: this.activatedRoute });
  }
}
