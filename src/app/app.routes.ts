import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'form', component: FormComponent},
    {path: 'portfolio', component: PortfolioComponent},
    {path: 'about_us', component:AboutUsComponent}
];
