import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cash-register',
  templateUrl: './cash-register.component.html',
  styleUrls: ['./cash-register.component.scss']
})
export class CashRegisterComponent implements OnInit {

  @Input() select;

  public input = false;
  public motive;
  public history = false;

  constructor() { }

  ngOnInit(): void {
  }

  showInput(motive: string){
    this.input = true;
    this.motive = motive;
  }

}
