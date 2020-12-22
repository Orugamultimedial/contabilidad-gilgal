import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.scss']
})
export class GraphicsComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
  };
  public barChartLabels: Label[] = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
  ];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [65000, 59000, 80000, 81000, 56000, 55000, 19000, 86000, 27000, 90000, 80000, 81000], label: 'Ingresos' },
    { data: [28000, 48000, 40000, 19000, 86000, 27000, 90000, 80000, 81000, 56000, 55000, 40000], label: 'Egresos' }
  ];

  public chartColors: Array<any> = [
    { // first color
      backgroundColor: '#0076B9',
    },
    { // second color
      backgroundColor: '#dc3545',
    }];


  constructor() { }

  ngOnInit(): void {
  }

    // events
    public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
      console.log(event, active);
    }

    public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
      console.log(event, active);
    }

    public randomize(): void {
      this.barChartType = this.barChartType === 'bar' ? 'line' : 'bar';
    }

}
