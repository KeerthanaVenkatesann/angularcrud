import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MockApiService {
  private baseUrl =
    'https://64d496a1b592423e46944c9c.mockapi.io/workingemployees/work'; // Mock API base URL

  constructor(private http: HttpClient) {}

  // Create operation
  create(item: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, item);
  }

  // Read operation
  read(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }

  // Update operation
  update(updatedItem: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${updatedItem.id}`, updatedItem);
  }

  // Delete operation
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
  getById(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }
}
