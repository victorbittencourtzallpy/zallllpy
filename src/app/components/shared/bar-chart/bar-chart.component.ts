import { Component, Input } from '@angular/core';
import { ChartConfiguration, ChartData, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';




@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [BaseChartDirective],
  template: `
    <div style="display: block; margin: 100px">
      <canvas baseChart
              [data]="barChartData"
              [options]="barChartOptions"
              [type]="barChartType">
      </canvas>
    </div>
  `,
})
export class BarChartComponent {
  @Input() barChartData: ChartData;
  // Chart configuration
  public barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    scales: {
      x: {
        ticks: { color: '#8e8e8e' }, // Style for x-axis labels
        grid: { display: false }
      },
      y: {
        ticks: { color: '#8e8e8e', callback: (value) => `${value}` }, // Percentage display for y-axis labels
        grid: { color: '#404040' },
        max: 10, // Sets y-axis max value to 100%
        beginAtZero: true
      }
    },
    layout: {
      padding: {
      }
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: '#ffffff', // Legend text color
          usePointStyle: true, // Makes legend dots round
        }
      }
    }
  };

  // Chart type
  public barChartType: ChartType = 'bar';
}