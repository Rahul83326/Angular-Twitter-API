import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes,RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import {MatRadioModule} from '@angular/material/radio';
import {MatGridListModule} from '@angular/material/grid-list';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
   

  
    
  ],
  imports: [
    BrowserModule,MatRadioModule,MatGridListModule,HttpClientModule, HttpClientJsonpModule,
    AppRoutingModule,MatFormFieldModule,MatInputModule,MatSelectModule,
    BrowserAnimationsModule,MatCardModule,MatIconModule,MatToolbarModule,MatSidenavModule,RouterModule,
    MatButtonModule,MatListModule, ReactiveFormsModule,FormsModule,
    SocialLoginModule
  ],
  providers: [ 
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '279790483855-jq5blq0ss047uec3g1kdjpt9tpesn6qq.apps.googleusercontent.com'
            )
          }
        ]
      } as SocialAuthServiceConfig,
    }     
],
  bootstrap: [AppComponent],
})
export class AppModule { }