import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingress-egress',
  templateUrl: './ingress-egress.component.html',
  styleUrls: ['./ingress-egress.component.scss']
})
export class IngressEgressComponent implements OnInit {

  @Input() motive;

  constructor() { }

  ngOnInit(): void {
  }
  getMotive(){
    if(this.motive === 'ingress'){
      return 'Ingreso';
    }else if ( this.motive === 'egress'){
      return 'Egreso';
    }
  }

}
