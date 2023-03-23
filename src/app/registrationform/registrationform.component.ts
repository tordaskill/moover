import { Component, NgModule } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css'],



})
export class RegistrationformComponent {
  'RegistrationForm' = new FormGroup({
    'email': new FormControl('',[
    Validators.required,
    Validators.minLength(3)
    ]),
    'password': new FormControl('',[
    Validators.required,
    Validators.minLength(3)
  ])

    });



register(){


}


}
