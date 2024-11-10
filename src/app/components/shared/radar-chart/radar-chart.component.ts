import { Component, Input } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-radar-chart',
  standalone: true,
  imports: [BaseChartDirective],
  template: `
    <div class="radar-chart-container">
      <canvas
        baseChart
        [data]="chartData"
        [options]="chartOptions"
        chartType="radar"
        type="radar"
      ></canvas>
    </div>
  `,
  styles: [`
    .radar-chart-container {
      width: 100%;
      max-width: 500px; /* Adjust as needed */
    }
  `]
})
export class RadarChartComponent {
  @Input() chartData: ChartData<'radar'>;
  @Input() chartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#FFFFFF', // Customize text color
        },
      },
    },
    scales: {
      r: {
        beginAtZero: true,
        max: 10,
        ticks: {
          backdropColor: 'transparent', // For better visibility on dark backgrounds
          color: '#FFFFFF', // Color of the ticks
        },
        grid: {
          color: '#FFFFFF' // Color of the grid lines
        }
      }
    },
  };
}