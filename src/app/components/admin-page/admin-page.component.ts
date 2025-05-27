import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-page',
  imports: [CommonModule],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})
export class AdminPageComponent implements OnInit {
  users: any[] = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getUsers().subscribe(data => {
      this.users = data;
    })

  }
}
