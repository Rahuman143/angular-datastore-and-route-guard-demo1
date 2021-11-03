import { Component } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-route-guards';
  userform: FormGroup;

  constructor() {
    this.userform = new FormGroup({
      'Firstname': new FormControl(),
      'Lastname': new FormControl(),
      'Username': new FormControl(),
      'City': new FormControl(),
      'State': new FormControl(),
      'Zip': new FormControl()
    });
 }
 Click(userform:FormGroup) {
  console.log(userform);
  this.title="this is localstorage";
localStorage.setItem("token",this.title); 
//localStorage.setItem("id",this.userform); 
}
}