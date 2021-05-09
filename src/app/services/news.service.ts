import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { New } from '../models/new.model';

@Injectable({
  providedIn: 'root',
})

export class NewsService {
  constructor(private http: HttpClient) { }

    private apiUrl = 'https://cms.qailumno.com/servicios/noticias';

    getAllNews(): Observable<New[]>  {
        return this.http.get<New[]>(this.apiUrl);
    }
}
