import { Component, OnInit } from '@angular/core';
import { New } from '../models/new.model';
import { getAllNews } from '../store/news.selector';
import { AppState } from '../store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public news$: Observable<New[]>;

  constructor(
    private store: Store<AppState>
  ) {
    this.news$ = this.store.select(getAllNews);
  }

  ngOnInit(): void {}
}
