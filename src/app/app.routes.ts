import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FaqComponent } from './components/faq/faq.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'form', component: FormComponent},
    {path: 'portfolio', component: PortfolioComponent},
    {path: 'about_us', component:AboutUsComponent},
    {path: 'contact_us', component:ContactUsComponent},
    {path: 'faq', component:FaqComponent},
    {path: 'admin', component:AdminPageComponent}

];
