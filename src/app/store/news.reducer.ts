import { New } from '../models/new.model';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { newActionTypes, newsLoaded } from './news.actions';

export interface NewState extends EntityState<New> {
  newsLoaded: boolean;
}

export const adapter: EntityAdapter<New> = createEntityAdapter<New>();

export const initialState = adapter.getInitialState({
  newsLoaded: false
});

export const newReducer = createReducer(
  initialState,

  on(newActionTypes.newsLoaded, (state, action) => {
    return adapter.addMany(
      action.news,
      {...state, newsLoaded: true}
    );
  })
);

export const { selectAll, selectIds } = adapter.getSelectors();