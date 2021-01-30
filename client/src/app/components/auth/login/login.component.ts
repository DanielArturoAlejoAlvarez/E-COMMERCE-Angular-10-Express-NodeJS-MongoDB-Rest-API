import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = {
    username: '',
    password: ''
  }

  constructor(private _as: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this._as.signIn(this.loginForm)
      .subscribe(data=>{
        if (data.ok) {
          localStorage.setItem("token", data.token)
          this._router.navigate(['user'])
        }else {
          alert(data.msg)
        }       
      },
      err=>{
        console.log(err.error.msg)
      })
  }

}
