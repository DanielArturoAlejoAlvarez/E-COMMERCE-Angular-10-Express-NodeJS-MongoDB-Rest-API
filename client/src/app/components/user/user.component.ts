import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms'
import User from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userForm: User = {
    displayName: '',
    email: '',
    username: '',
    password: '',
    avatar: '',
    role: 'USER',
    status: true
  }

  user: User

  constructor(private _us: UserService) { }

  ngOnInit(): void {
  }

  addUser() {
    console.log(this.userForm)
    this._us.saveUser(this.userForm)
      .subscribe(data=>{
        if (!data.ok) {
          alert("ERROR!!")
        }else{
          alert("User saved successfully!")
        }
      },
      err=>{
        console.log(err)
      })
  }

}
