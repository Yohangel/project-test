import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Program } from '../models/program.model';

@Injectable({
  providedIn: 'root',
})

export class ProgramsService {
  constructor(private http: HttpClient) { }

    private apiUrl = 'https://cms.qailumno.com/servicios/programas';

    getAllPrograms(): Observable<Program[]>  {
        return this.http.get<Program[]>(this.apiUrl);
    }
}
