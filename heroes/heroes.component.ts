import { Component } from '@angular/core';
import {Hero} from '../app/hero';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-heroes',
  imports: [CommonModule, FormsModule],
  templateUrl: './heroes.component.html',
  standalone: true,
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent {

hero: Hero ={
  id:1,
  name: "Frieren"
};
}
