import { Routes } from '@angular/router';

import { TermsDetailsComponent } from './terms-details/terms-details.component';
import { Section3Component } from './sections/section-3/section-3.component';
import { PrivacyDetailsComponent } from './privacy-details/privacy-details.component';

export const routes: Routes = [
  {
    path: '',
    component: Section3Component,
  },
  {
    path: 'terms',
    component: TermsDetailsComponent,
  },
  {
    path: 'privacy',
    component: PrivacyDetailsComponent,
  },
];
