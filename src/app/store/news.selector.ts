
import { New } from '../models/new.model';
import { NewState,  selectAll, selectIds } from './news.reducer';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export const newFeatureSelector = createFeatureSelector<NewState>('news');

export const getAllNews = createSelector(
  newFeatureSelector,
  selectAll
);

export const areNewsLoaded = createSelector(
  newFeatureSelector,
  state => state.newsLoaded
);