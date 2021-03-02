import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {HttpClientModule} from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import { from } from 'rxjs';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { JoinformComponent } from './joinform/joinform.component';
import { LoginService } from './service/login.service';
import { AngularFireModule } from '@angular/fire';
import { LogoutComponent } from './logout/logout.component';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireFunctionsModule } from '@angular/fire/functions';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    JoinformComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyA-US-7TYgk724Lb5zaLQT_hOePNzZSB-Y",
      authDomain: "hamaproject-1.firebaseapp.com",
      projectId: "hamaproject-1",
      storageBucket: "hamaproject-1.appspot.com",
      messagingSenderId: "136760992613",
      appId: "1:136760992613:web:b67938b89d21560276f78c"
    }),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireFunctionsModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireMessagingModule

    // AngularFireModule.initializeApp({
    //   apiKey: "AIzaSyA-US-7TYgk724Lb5zaLQT_hOePNzZSB-Y",
    //   authDomain: "hamaproject-1.firebaseapp.com",
    //   projectId: "hamaproject-1",
    //   storageBucket: "hamaproject-1.appspot.com",
    //   messagingSenderId: "136760992613",
    //   appId: "1:136760992613:web:b67938b89d21560276f78c"
    // })

  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
