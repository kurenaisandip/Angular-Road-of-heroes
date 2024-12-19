import { Component } from '@angular/core';
import {Hero} from '../app/hero';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HEROES} from '../app/mock-heroes';
import {HeroDetailComponent} from '../hero-detail/hero-detail.component';
import {HeroService} from '../app/hero.service';
import {MessagesComponent} from '../messages/messages.component';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-heroes',
  imports: [CommonModule, FormsModule, HeroDetailComponent, MessagesComponent],
  templateUrl: './heroes.component.html',
  standalone: true,
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent {

// heroes = HEROES;
  heroes: Hero[] = [];
  selectedHero?: Hero;


  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onWhatToDo(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }


}
