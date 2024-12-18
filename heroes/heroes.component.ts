import { Component } from '@angular/core';
import {Hero} from '../app/hero';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HEROES} from '../app/mock-heroes';
import {HeroDetailComponent} from '../hero-detail/hero-detail.component';

@Component({
  selector: 'app-heroes',
  imports: [CommonModule, FormsModule, HeroDetailComponent],
  templateUrl: './heroes.component.html',
  standalone: true,
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent {

heroes = HEROES;
  selectedHero?: Hero;
  onWhatToDo(hero: Hero): void {
    this.selectedHero = hero;
  }
}
