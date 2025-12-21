import { Routes } from '@angular/router';
// Import Home and Portfolio Form components
import { Home } from './components/home/home';
import { PortfolioForm } from './components/portfolio-form/portfolio-form';

// App routes configuration
export const routes: Routes = [
  { path: '', component: Home }, // Home page as default route
  { path: 'create-portfolio', component: PortfolioForm }, // Portfolio Form page
];
