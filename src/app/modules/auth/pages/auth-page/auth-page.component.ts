import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit {
  formLogin: FormGroup = new FormGroup({});

  constructor(private _authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        username: new FormControl('kminchelle',[
          Validators.required,
        ]),
        password: new FormControl('0lelplR',[
          Validators.required,
        ]),
      }
    )
  }

  get username() {
    return this.formLogin.get('username');
  }

  get password() {
    return this.formLogin.get('password');
  }

  sendLogin(): void {
    if(this.formLogin.valid) {
      const {username, password} = this.formLogin.value;
      this._authService.login(username,password)
        .subscribe(
          res => {
            this.router.navigate(['/', 'movies'])
            return 
          },
          err => {
            console.error("sendLogin ~ err:", err)
            return 
          }
        )
    }
  }
}
