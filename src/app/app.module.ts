import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { NewsDetailComponent } from './news/detail/detail.component';
import { reducers, metaReducers } from './store';
import { newReducer } from './store/news.reducer';
import { NewEffects } from './store/news.effects';
import { NewsResolver } from './news/news.resolver';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    NewsDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    StoreModule.forFeature('news', newReducer),
    EffectsModule.forRoot(),
    EffectsModule.forFeature([NewEffects])
  ],
  providers: [NewsResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
