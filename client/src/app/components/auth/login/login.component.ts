import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
 

  loginForm = {
    username: '',
    password: '',
  };

  constructor(
    private _toastr: ToastrService,
    private _as: AuthService,
    private _ls: LoginService,
    private _router: Router
  ) {}

  ngOnInit(): void {}

  login() {
    this._ls.signIn(this.loginForm).subscribe(
      (data) => {
        if (data.ok) {
          console.log(data);
          this._as.setUser(data.user);
          localStorage.setItem('token', data.token);
          //alert('You are now logged in!')
          this._toastr.success('You are now logged in!','SUCCESS:')
          this._router.navigate(['user']);
        } else {
          alert(data.msg);
        }
      },
      (err) => {
        console.log(err.error.msg);
        this._toastr.error(err.error.msg, 'ERROR:')
      }
    );
  }
}
