import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Carousel } from '../carousel/carousel';
import { TopHeader } from '../top-header/top-header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, Carousel, TopHeader, Footer],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home { }
