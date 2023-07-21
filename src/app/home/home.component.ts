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
      nome: "Margherita",
      descrizione: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus vero nihil,",
      prezzo: 5,
    },
    {
      foto: "/assets/img/pizza1CAR.png",
      nome: "Capricciosa",
      descrizione: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus vero nihil,",
      prezzo: 7,
    },
    {
      foto: "/assets/img/pizza1CAR.png",
      nome: "Pata pizza",
      descrizione: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus vero nihil,",
      prezzo: 5,
    },
    {
      foto: "/assets/img/pizza1CAR.png",
      nome: "4 Formaggi",
      descrizione: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus vero nihil,",
      prezzo: 12,
    },
    {
      foto: "/assets/img/pizza1CAR.png",
      nome: "Boscaiola",
      descrizione: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus vero nihil,",
      prezzo: 11,
    },
    {
      foto: "/assets/img/pizza1CAR.png",
      nome: "Elisa",
      descrizione: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus vero nihil,",
      prezzo: 18,
    },
    {
      foto: "/assets/img/pizza1CAR.png",
      nome: "Bianca",
      descrizione: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus vero nihil,",
      prezzo: 6,
    },
    {
      foto: "/assets/img/pizza1CAR.png",
      nome: "Marinara",
      descrizione: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus vero nihil,",
      prezzo: 8,
    },
    {
      foto: "/assets/img/pizza1CAR.png",
      nome: "Quattro stagioni",
      descrizione: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus vero nihil,",
      prezzo: 14,
    },
    {
      foto: "/assets/img/pizza1CAR.png",
      nome: "Diavola",
      descrizione: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus vero nihil,",
      prezzo: 13,
    },
    {
      foto: "/assets/img/pizza1CAR.png",
      nome: "Romana",
      descrizione: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus vero nihil,",
      prezzo: 7,
    },
    {
      foto: "/assets/img/pizza1CAR.png",
      nome: "Vegetariana",
      descrizione: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus vero nihil,",
      prezzo: 20,
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



