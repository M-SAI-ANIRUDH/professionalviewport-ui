import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';

interface PortfolioTemplate {
  title: string;
  image: string;
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, CarouselModule, ButtonModule],
  templateUrl: './carousel.html',
  styleUrl: './carousel.scss',
})
export class Carousel {
  templates: PortfolioTemplate[] = [
    {
      title: 'Tech Pro',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=90',
    },
    {
      title: 'Consultant',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=90',
    },
    {
      title: 'Creative',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=90',
    },
    {
      title: 'Corporate',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=90',
    },
    {
      title: 'Personal',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=90',
    },
    {
      title: 'Business',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=90',
    }
  ];

  // PrimeNG Carousel settings
  responsiveOptions = [
    {
      breakpoint: '1400px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '992px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  autoplayInterval = 3000; // 3 seconds
  circular = true; // Infinite scrolling
}
