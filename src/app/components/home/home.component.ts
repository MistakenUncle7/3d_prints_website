import { Component } from '@angular/core';
import { HeroSectionComponent } from "../hero-section/hero-section.component";
import { FeaturesSectionComponent } from "../features-section/features-section.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroSectionComponent, FeaturesSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
