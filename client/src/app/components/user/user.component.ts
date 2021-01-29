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

  users: []



  constructor(private _us: UserService) { }

  ngOnInit() {
    this.listUser()
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

  listUser() {
    this._us.getUsers()
      .subscribe(data=>{
        this.users = data
        console.log(data)
      },
      err=>{
        console.log(err)
      })
  }

}
