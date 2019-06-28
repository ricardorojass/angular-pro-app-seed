import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'register',
    template: `
        <div>
          Register
          <auth-form (submitted)="registerUser($event)">
            <h1>Register</h1>
            <a routerLink="/auth/login">Already have an account?</a>
            <button type="submit">
              Create account
            </button>
          </auth-form>
        </div>
    `
})

export class RegisterComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    registerUser(event: FormGroup) {
      console.log(event.value);

    }
}
