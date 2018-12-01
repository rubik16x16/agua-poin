import { Component, OnInit } from '@angular/core';
import animateScrollTo from 'animated-scroll-to';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.scrollAnimate();
  }

  private scrollAnimate(): void{

    let navbar= document.getElementById("navbar");

    window.onscroll = function() {

      if(window.scrollY > 40){
        navbar.classList.remove("navbar-yellow");
        navbar.classList.remove("navbar-light");
        navbar.classList.add("navbar-red");
        navbar.classList.add("navbar-dark");
      }else{
        navbar.classList.remove("navbar-red");
        navbar.classList.remove("navbar-dark");
        navbar.classList.add("navbar-yellow");
        navbar.classList.add("navbar-light");
      }
    };
  }

  private runScroll(seccion: string): void{

    if(typeof seccion !== 'number'){

      animateScrollTo(document.getElementById(seccion));
    }else{

      animateScrollTo(seccion);
    }
  }

}
