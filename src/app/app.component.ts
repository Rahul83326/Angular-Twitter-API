import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  loginForm!: FormGroup;
  socialUser: SocialUser = new SocialUser;
  isLoggedin: boolean = false;  
  title: any;
  date!: Date; //date Variable
  //date Variable
   //date Variable
   logedInForm!: FormGroup; //These are variables
  //These are variables
   emailId: any;
   password: any;
   display='none'; //default Variable

  

constructor(
  private formBuilder: FormBuilder, 
  private socialAuthService: SocialAuthService,
  private http: HttpClient
) { }


ngOnInit() {
  this.loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });    
  
  this.socialAuthService.authState.subscribe((user) => {
    this.socialUser = user;
    this.isLoggedin = (user != null);
    this.http.post<any>('http://localhost:4000/user/signup',this.socialUser).subscribe(data => {
        console.log(data);
    })
  });

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
    

loginWithGoogle(): void {
  this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
}

logOut(): void {
  this.socialAuthService.signOut();
  }
}

 