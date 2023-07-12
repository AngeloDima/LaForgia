import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.css']
})
export class Section1Component implements OnInit {
  slideLavagna: any[] = [
    {
      slide: "https://demo.gridgum.com/bootstrap/pizza-store/PIZZA/images/slide01.jpg"
    },
    {
      slide: "https://demo.gridgum.com/bootstrap/pizza-store/PIZZA/images/slide02.jpg"
    },
    {
      slide: "https://demo.gridgum.com/bootstrap/pizza-store/PIZZA/images/slide03.jpg"
    }
  ];




  currentSlideIndex = 0;

  ngOnInit() {
    setInterval(() => {
      this.changeSlide();
    }, 4000);
  }

  changeSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slideLavagna.length;
  }
}
