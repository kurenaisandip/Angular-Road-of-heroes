import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroesComponent} from '../heroes/heroes.component';
import {MessagesComponent} from '../messages/messages.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroesComponent, MessagesComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Tour Of Heroes';
}
