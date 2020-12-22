import { Component, OnInit } from '@angular/core';
import { UsersService } from './../../services/users.service';
import { Router } from '@angular/router';
import { UserModel } from './../../models/user/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user = {
    user: null,
    pass: null,
  };
  public textError = null;

  constructor(  private users: UsersService,
                public router: Router) { }

  ngOnInit(): void {
  }

  retrieveUsers(){
    this.users.obtenerUsuarios().subscribe(
      res => {
        console.log(res as UserModel);
        const usersList = res as UserModel;
        this.analizeUser(usersList);
      },
      error => {
        console.log(error);
      }
    );
  }

  analizeUser(usersList){
    for(const user of usersList){
      if (user.email === this.user.user){
        if (user.pass === this.user.pass){
          localStorage.setItem('user', JSON.stringify(user));
          this.router.navigate(['//admin']);
          this.user.user = null;
          this.user.pass = null;
        }else{
          this.textError = 'Contraseña incorrecta';
          this.user.user = null;
          this.user.pass = null;
        }
      }else{
        this.textError = 'Email inválido';
        this.user.user = null;
        this.user.pass = null;
      }

    }

  }

}
