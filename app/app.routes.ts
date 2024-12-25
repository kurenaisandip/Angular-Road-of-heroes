import { Routes } from '@angular/router';
import {HeroesComponent} from '../heroes/heroes.component';
import {AppComponent} from './app.component';

export const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'heroes', component: HeroesComponent},
];
