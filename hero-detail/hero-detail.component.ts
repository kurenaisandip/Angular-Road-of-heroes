import {Component, Input} from '@angular/core';
import {Hero} from '../app/hero';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  imports: [FormsModule, CommonModule],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.scss',
  standalone: true
})
export class HeroDetailComponent {
@Input() hero?: Hero;
}
