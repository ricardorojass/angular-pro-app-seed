import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'login',
    template: `
        <div>
          Login
          <auth-form (submitted)="loginUser($event)">
            <h1>Login</h1>
            <a routerLink="/auth/register">Not Registered?</a>
            <button type="submit">
              Login
            </button>
          </auth-form>
        </div>
    `
})

export class LoginComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    loginUser(event: FormGroup) {
      console.log(event.value);

    }
}
