import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Third-party modules
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// Shared modules
import { SharedModule } from './shared/shared.module';

export const ROUTES: Routes = [
  {
    path: 'auth',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'login' },
      { path: 'login', loadChildren: './login/login.module#LoginModule' },
      { path: 'register', loadChildren: './register/register.module#RegisterModule' }
    ]
  }
];

export const firebaseConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyAUfNj8nPWBAAavSPEGEpdam8IKJ4Xgec0",
  authDomain: "fitness-app-ea949.firebaseapp.com",
  databaseURL: "https://fitness-app-ea949.firebaseio.com",
  projectId: "fitness-app-ea949",
  storageBucket: "",
  messagingSenderId: "591178175203",
};

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    SharedModule.forRoot(),
  ],
})
export class AuthModule {}
