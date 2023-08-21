import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { SelectionService } from 'src/app/services/selection.service';
import { Selection } from 'src/app/interfaces/selection.model';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
  };
  public barChartType: ChartType = 'bar';
  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [  ],
    datasets: [
      { data: [], label: 'Detection Rate', hidden: false },
      { data: [], label: 'False Positive Rate' , hidden: false}
    ]
  };
  
  constructor(private selectionService: SelectionService) { }

  ngOnInit(): void {
    this.selectionService.getSelections().subscribe(data => {
      const filteredData = data.filter(selection => 
        ['stylegan', 'progan', 'stylegan2'].includes(selection.algorithm)
      );
  
      const groupedData = this.groupByAlgorithm(filteredData);
  
      for (const algorithm in groupedData) {
        this.barChartData.labels?.push(algorithm);
  
        const selections = groupedData[algorithm];
        const avgDetectionRate = selections.reduce((acc: number, selection) => acc + (selection.totalFakeFound / selection.totalFake), 0) / selections.length;
        const avgFalsePositiveRate = selections.reduce((acc: number, selection) => acc + (selection.totalRealFound / (9 - selection.totalFake)), 0) / selections.length;

  
        this.barChartData.datasets[0].data.push(avgDetectionRate);
        this.barChartData.datasets[1].data.push(avgFalsePositiveRate);
      }
      this.chart?.update();
    });

  }

  
  private groupByAlgorithm(data: Selection[]): { [key: string]: Selection[] } {
    return data.reduce((acc: { [key: string]: Selection[] }, selection) => {
      if (!acc[selection.algorithm]) {
        acc[selection.algorithm] = [];
      }
      acc[selection.algorithm].push(selection);
      return acc;
    }, {});
  }
}