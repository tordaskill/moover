import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import * as bootstrap from 'bootstrap';
import { Carousel } from 'bootstrap';
import "bootstrap";
import { fade, slide, topslide } from '../animation';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',

  styleUrls: ['./homepage.component.css'],
  animations: [
    fade
  ]



})
export class HomepageComponent {
timer: any;
button: HTMLButtonElement;

  constructor(private router:Router, private active: ActivatedRoute){
    this.button = document.getElementById('myButton') as HTMLButtonElement;
    
    window.onload = () => {
      this.button = document.getElementById('myButton') as HTMLButtonElement;
    this.timer = setInterval(() => {      
      this.button.click();
      console.log(this.button);
    }, 5000);
  } 



  }





text="Vítejte na stránkách Automower overview";
text1="Naleznete zde kompletní informace ohledně výroby robotických sekaček, je však třeba se přihlásit.";
text2="Pokud nemáte přihlašovací údaje registrujte se a následně kontaktujte správce pro udělení příslušného oprávnění.";


}
