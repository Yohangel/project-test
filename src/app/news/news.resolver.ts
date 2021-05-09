import { areNewsLoaded } from '../store/news.selector';
import { loadNews, newsLoaded } from '../store/news.actions';
import { AppState } from '../store';
import { New } from '../models/new.model';
import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import {select, Store} from '@ngrx/store';
import {filter, finalize, first, tap} from 'rxjs/operators';

@Injectable()
export class NewsResolver implements Resolve<Observable<any>> {

  constructor(private store: Store<AppState>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.store
    .pipe(
        select(areNewsLoaded),
        tap((newsLoaded) => {
          if (!newsLoaded) {
            this.store.dispatch(loadNews());
          }

        }),
        filter(newsLoaded => newsLoaded),
        first()
    );
  }
}