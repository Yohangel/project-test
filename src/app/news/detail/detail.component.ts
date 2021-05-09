import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { New } from '../../models/new.model';
import { getAllNews } from '../../store/news.selector';
import { AppState } from '../../store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class NewsDetailComponent implements OnInit {

  private news$: Observable<New[]>;
  private newId: string = '';
  public currentNew: New = { id: '', title: '', body: ''};

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {
    this.news$ = this.store.select(getAllNews);
    this.route.params.subscribe((param) => {
      this.newId = param.id;
      this.selectNewById();
    });
  }

  ngOnInit(): void {
  }

  private selectNewById() {
    this.news$.subscribe((res) => {
      const filtered = res.find((x) => x.id == this.newId);
      if (filtered) {
        this.currentNew.id = filtered.id; 
        this.currentNew.title = filtered.title; 
        this.currentNew.body = filtered.body; 
      };
      });
  }

}
