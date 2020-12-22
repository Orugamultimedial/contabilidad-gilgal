import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from './../../services/users.service';
import { UserModel } from './../../models/user/user.model';
@Component({
  selector: 'app-userresgistration',
  templateUrl: './userresgistration.component.html',
  styleUrls: ['./userresgistration.component.scss']
})
export class UserresgistrationComponent implements OnInit {

  @Input() userEdit;
  public user = {
    name: null,
    email: null,
    code: '+54',
    phone: null,
    position: 'pastor',
    branch:'Obera',
    pass: null,
    permissions: null,
  }
  public internationalCode = [
    '+54','+55','+59'
  ]
  public operators = [
    'pastor',
    'contador',
    'revisor',
  ]
  public branchs = [
    'Aristobulo',
    'Brasil',
    'Campo Grande',
    'Campo Viera',
    'Colonia Tacuara',
    'L. N. Alem',
    'Loreto',
    'Obera',
    'Panambi',
    'Paraguay',
    'Posadas',
    'San Javier'
  ]
  public textError = null;

  constructor( private users: UsersService) { }

  ngOnInit(): void {
  }

  registerNewUser(){

    const form = new FormData;

    form.append('name',this.user.name);
    form.append('email',this.user.email);
    form.append('code',this.user.code);
    form.append('phone',this.user.phone);
    form.append('position',this.user.position);
    form.append('branch', this.user.branch);
    form.append('permissions', this.user.permissions);
    form.append('pass',this.user.pass);

    this.users.altaUsuario(form).subscribe(
      res => {
        console.log(res);
      },
      error =>{
        console.log(error);
      }
    );
  }
  getTitle(){
    if (this.userEdit === null){
      return 'Crear Usuario';
    }else{
      this.user = this.userEdit;
      // console.log(this.user);
      return 'Editando Datos de ' + this.user.name;
    }
  }
  getTypePass(){
    if (this.userEdit === null){
      return "password";
    }else{
      return "text";
    }
  }
  getTitleButton(){
    if (this.userEdit === null){
      return "Crear Usuario";
    }else{
      return "Modificar Usuario";
    }
  }
  analizeEmail(email){
    this.users.obtenerUsuarios().subscribe(
      res => {
        const users = res as UserModel;
        this.textError = checkEmail(users, email);
      },
      error => {
        console.log(error);
      }
    );

    function checkEmail(users, email){
      for (const user of users){
        console.log(user.email);

        if (user.email === email){
          return 'El email ya está registrado';
        }else{
          return null;
        }
      }
    }
  }

}
