import { newActionTypes, newsLoaded } from './news.actions';
import { NewsService } from '../services/news.service';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { concatMap, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class NewEffects {

  loadNews$ = createEffect(() =>
    this.actions$.pipe(
      ofType(newActionTypes.loadNews),
      concatMap(() => this.newsService.getAllNews()),
      map(news => newActionTypes.newsLoaded({news}))
    )
  );

  constructor(private newsService: NewsService, private actions$: Actions, private router: Router) {}
}