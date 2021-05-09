import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Register } from '../models/register.model';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'https://cms.qailumno.com/servicios/registro';

  register(register: Register): Observable<any> {
    return this.http.post<any>(this.apiUrl, register);
  }
}
