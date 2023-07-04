import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  datiPizze: any[] = [
    {
      foto: "/assets/img/pizza1CAR.png",
      nome: "pizza1",
      descrizione: "pizza descrizione",
      prezzo: 10,
    },
    {
      foto: "/assets/img/pizza1CAR.png",
      nome: "pizza2",
      descrizione: "pizza descrizione",
      prezzo: 10,
    },
    {
      foto: "/assets/img/pizza1CAR.png",
      nome: "pizza1",
      descrizione: "pizza descrizione",
      prezzo: 10,
    },
    {
      foto: "/assets/img/pizza1CAR.png",
      nome: "pizza2",
      descrizione: "pizza descrizione",
      prezzo: 10,
    },
    {
      foto: "/assets/img/pizza1CAR.png",
      nome: "pizza1",
      descrizione: "pizza descrizione",
      prezzo: 10,
    },
    {
      foto: "/assets/img/pizza1CAR.png",
      nome: "pizza2",
      descrizione: "pizza descrizione",
      prezzo: 10,
    },
    {
      foto: "/assets/img/pizza1CAR.png",
      nome: "pizza1",
      descrizione: "pizza descrizione",
      prezzo: 10,
    },
    {
      foto: "/assets/img/pizza1CAR.png",
      nome: "pizza2",
      descrizione: "pizza descrizione",
      prezzo: 10,
    },

  ];



  scrollCarousel(direction: string) {
    const carouselContent = document.querySelector('.carousel-content') as HTMLElement;
    const itemWidth = document.querySelector('.carousel-item')?.clientWidth || 0;
    const scrollStep = itemWidth + 100; // Adjust the value of 20 as needed for margin/padding

    if (direction === 'left') {
      carouselContent.scrollLeft -= scrollStep;
    } else if (direction === 'right') {
      carouselContent.scrollLeft += scrollStep;
    }
  }


}



