import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { Store } from 'store';

// feature modules

// containers
import { AppComponent } from './containers/app/app.component';

// components

// routes
export const ROUTES: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    Store
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}

/*
const firebaseConfig = {
  apiKey: "AIzaSyAUfNj8nPWBAAavSPEGEpdam8IKJ4Xgec0",
  authDomain: "fitness-app-ea949.firebaseapp.com",
  databaseURL: "https://fitness-app-ea949.firebaseio.com",
  projectId: "fitness-app-ea949",
  storageBucket: "",
  messagingSenderId: "591178175203",
  appId: "1:591178175203:web:51d28974c40a2244"
};
*/
