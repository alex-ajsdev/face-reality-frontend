import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Image } from 'src/app/interfaces/image.model';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  private apiUrl = 'http://localhost:3000/images/';

  constructor(private http: HttpClient) {}

  getImages(algorithm: string): Observable<Image[]> {
    return this.http.get<Image[]>(this.apiUrl + algorithm);
  }
}
