import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'register',
    template: `
        <div>
          Register
          <auth-form>
          </auth-form>
        </div>
    `
})

export class RegisterComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
