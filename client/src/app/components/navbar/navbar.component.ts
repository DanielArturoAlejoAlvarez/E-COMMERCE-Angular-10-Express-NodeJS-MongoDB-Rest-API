import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import User from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  user: User;

  constructor(private _as: AuthService, private _router: Router) {}

  ngOnInit(): void {
    this.user = this._as.getCurrentUser(); 
  } 
   
}
