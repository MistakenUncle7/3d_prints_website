import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  name: string = '';
  phone: string = '';
  email: string = '';
  link: string = '';
  selectedProfile: 'general' | 'dentist' | null = null;
  selectedTechnology: 'resina' | 'filamento' | null = null;
  material: string = '';
  color: string = '';
  resolution: string = '';
  quantity: number | null = null;
  size: number | null = null;
  deliveryTime: string = '';
  modelType: string = '';
  includesCad: boolean = false;
  needsCad: boolean = false;
  deliveryDate: string = '';
  comments: string = '';

  materialOptions: { [key: string]: string[] } = {
    resina: ['PLA', 'ABS', 'PETG (FDM)'],
    filamento: ['Estándar', 'Transparente', 'Felxible (Resina)']
  }

  onProfileChange(profile: 'general' | 'dentist', event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this.selectedProfile = checked ? profile : null;
  }

  constructor(private api: ApiService) {}

  submitForm() {
    const data = {
      name: this.name,
      phone: this.phone,
      email: this.email,
      link: this.link,
      profile: this.selectedProfile,
      technology: this.selectedTechnology,
      material: this.material,
      color: this.color,
      resolution: this.resolution,
      quantity: this.quantity,
      size: this.size,
      modelType: this.modelType,
      needsCad: this.needsCad,
      deliveryDate: this.deliveryDate,
      comments: this.comments
    };

    this.api.addUser(data).subscribe(response => {
      console.log(response)
      alert("Usario registrado")
    });

    
  }
}
