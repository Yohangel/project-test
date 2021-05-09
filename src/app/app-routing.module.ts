import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { NewsDetailComponent } from './news/detail/detail.component';
import { NewsResolver } from './news/news.resolver';

const routes: Routes = [
  { 
    path: 'home', 
    component: HomeComponent,
    resolve: {
      mews: NewsResolver
    } 
  },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'registro', component: RegisterComponent },
  { 
    path: 'noticias/:id', 
    component: NewsDetailComponent,
    resolve: {
      mews: NewsResolver
    }
  },
  { path: '**', redirectTo: '/home'},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
