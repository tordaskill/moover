import { animate, transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fade, slide } from '../animation';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [

    fade,
    slide






  ]
})



export class NavbarComponent {
  constructor(
    private router: Router, 
    private route:ActivatedRoute){}

loginProperty=false;

setLoginProperty(){
  this.loginProperty=!this.loginProperty;
}



}
