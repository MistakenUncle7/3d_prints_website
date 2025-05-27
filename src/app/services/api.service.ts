import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private getUrl = "http://localhost/3d_api/get_users.php"
  private insertUrl = "http://localhost/3d_api/insert_users.php"

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.getUrl);
  }

  addUser(userData: any): Observable<any> {
    return this.http.post<any>(this.insertUrl, userData);
  } 

}
