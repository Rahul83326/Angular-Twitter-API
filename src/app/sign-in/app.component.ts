import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  date!: Date; //date Variable
 //date Variable
  //date Variable
  logedInForm!: FormGroup; //These are variables
 //These are variables
  emailId: any;
  password: any;
  display='none'; //default Variable

  constructor() { }

  ngOnInit() {
    this.date = new Date(); // Today date and time
    //Login Validation
    this.logedInForm = new FormGroup({
      emailId: new FormControl("youremail@gmail.com",
        Validators.compose([
          Validators.required,
          Validators.pattern("[^ @]*@[^ @]*")
      ])),
      password: new FormControl('YourPassword', [
           Validators.minLength(8),
           Validators.required])
    });
  }

  // Model Driven Form - login
  mdfLogin(data: { emailId: any; password: any; }) {
    this.emailId = data.emailId;
    this.password = data.password;
    alert(JSON.stringify(data));
  }

  openModalDialog(){
    this.display='block'; //Set block css
 }

 closeModalDialog(){
  this.display='none'; //set none css after close dialog
 }
}