import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  selectedProfile: 'general' | 'dentist' | null = null;
  selectedTechnology: 'resina' | 'filamento' | null = null;

  materialOptions: { [key: string]: string[] } = {
    resina: ['PLA', 'ABS', 'PETG (FDM)'],
    filamento: ['Estándar', 'Transparente', 'Felxible (Resina)']
  }

  onProfileChange(profile: 'general' | 'dentist', event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this.selectedProfile = checked ? profile : null;
  }
}
