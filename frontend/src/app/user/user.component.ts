import { Component, OnInit } from '@angular/core';

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
        navbar.classList.add("navbar-red");
      }else{
        navbar.classList.remove("navbar-red");
        navbar.classList.add("navbar-yellow");
      }
    };
  }

}
