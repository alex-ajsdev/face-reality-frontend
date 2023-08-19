import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Selection } from '../interfaces/selection.model';

@Injectable({
  providedIn: 'root',
})
export class SelectionService {
  private apiUrl = 'http://localhost:3000/selections';

  constructor(private http: HttpClient) {}

  // Get all users
  getSelections(): Observable<Selection[]> {
    return this.http.get<Selection[]>(this.apiUrl);
  }

  // Create a new user
  createSelection(selection: Selection): Observable<Selection> {
    return this.http.post<Selection>(this.apiUrl, selection);
  }
}
