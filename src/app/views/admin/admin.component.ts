import { Component, OnInit } from '@angular/core';
import { getMaxListeners } from 'process';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public churchBranch = [
    'Caja Central',
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

  public select=null;
  public profile=false;
  public registration=false;
  public userEdit = null;
  public user = JSON.parse(localStorage.getItem('user'));

  constructor() { }

  ngOnInit(): void {
  }



}
