import { New } from '../models/new.model';
import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';


export const loadNews = createAction(
  '[News List] Load News via Service',
);

export const newsLoaded = createAction(
  '[News Effect] News Loaded Successfully',
  props<{news: New[]}>()
);

export const newActionTypes = {
  loadNews,
  newsLoaded
};