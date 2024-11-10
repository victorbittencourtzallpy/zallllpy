import { Component, Input } from '@angular/core';
import { ChartData, ChartDataset, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';


@Component({
  selector: 'app-doughnut-chart',
  standalone: true,
  imports:[BaseChartDirective],
  template: `<canvas
    baseChart
    [data]="chartData"
    [options]="doughnutChartOptions"
    chartType="doughnut"
    type="doughnut"
  ></canvas>`,
})
export class DoughnutChartComponent {
  @Input() chartData: ChartData<'doughnut'>;  // Mak
  @Input() labels: string[];

  doughnutChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };
}
