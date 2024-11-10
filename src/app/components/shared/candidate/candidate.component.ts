import { Component, OnInit, Signal, computed, signal } from '@angular/core';
import { Candidate } from '../../../models/Candidate';
import { CandidateService } from '../../../services/candidates.service';
import { IOpening } from '../../../models/Opening';
import { OpeningsService } from '../../../services/openings.service';
import { BarChartComponent } from '../bar-chart/bar-chart.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ChartDataset, ChartData, DatasetChartOptions, ChartOptions } from 'chart.js';
import { CandidateAbility } from '../../../models/Ability';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { DoughnutChartComponent } from '../donut-chart/donut-chart.component';
import { RadarChartComponent } from '../radar-chart/radar-chart.component';
import { MatButtonModule } from '@angular/material/button';



@Component({
  selector: 'app-candidate',
  standalone: true,
  imports: [BarChartComponent, MatFormFieldModule, MatIconModule, RadarChartComponent, MatButtonModule],
  templateUrl: './candidate.component.html',
  styleUrl: './candidate.component.scss',
})
export class CandidateComponent implements OnInit {
  candidate: Signal<Candidate | null> = signal<Candidate | null>(null);
  opening: Signal<IOpening | null> = signal<IOpening | null>(null);

  mandatoryReqSelected: Signal<Set<string>>;
  desirableReqSelected: Signal<Set<string>>;

  openingId: number;
  candidateId: number;
  chartData: Signal<ChartData<'bar'>> = computed(() => this.buildData());
  bestAbilities: Signal<CandidateAbility[]> = computed(() => {
    const abilities = this.candidate().abilities;
    const sortedAbilities = abilities.sort((a, b) => b.score - a.score);

    // Return the top 3 abilities
    return sortedAbilities.slice(0, 3);
  });

  worstAbilities: Signal<CandidateAbility[]> = computed(() => {
    {
      // Sort abilities by score in ascending order
      const sortedAbilities = this.candidate().abilities.sort(
        (a, b) => a.score - b.score
      );

      // Return the first 3 abilities
      return sortedAbilities.slice(0, 3);
    }
  });

  worstAbilitiesDataset: Signal<ChartData<'doughnut'>> = computed(() => {
    const abilities = this.worstAbilities();

    // Initialize the data structure with labels and a single dataset
    let dataToReturn: ChartData<'doughnut'> = {
      labels: abilities.map((ability) => ability.name), // Extract labels from abilities
      datasets: [
        {
          data: abilities.map((ability) => ability.score), // Extract scores for data
          backgroundColor: ['#FF5722', '#FF7043', '#FF8A65'], // Colors for each ability
          hoverBackgroundColor: ['#E64A19', '#FF5722', '#FF7043'], // Colors on hover
        },
      ],
    };

    return dataToReturn;
  });

  labels: Signal<string[]> = computed(() => {
    return [
      ...Array.from(this.mandatoryReqSelected()),
      ...Array.from(this.desirableReqSelected()),
    ];
  });

  constructor(
    private candidateService: CandidateService,
    private openingService: OpeningsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.openingId = Number(this.route.snapshot.paramMap.get('openingId'));
    this.candidateId = Number(this.route.snapshot.paramMap.get('candidateId'));

    // Fetch candidate and opening data
    this.candidateService.fetchCandidateById(this.candidateId);
    this.openingService.fetchOpeningById(this.openingId);

    // Assign the candidate and opening signals from the services
    this.candidate = this.candidateService.getSelectedCandidate();
    this.opening = this.openingService.getCurrentoOpening();

    this.mandatoryReqSelected =
      this.openingService.getselectedMandatoryRequirements();
    this.desirableReqSelected =
      this.openingService.getselectedDesirableRequirements();
  }

  goBack() {
    this.router.navigate([`/openings/${this.openingId}`]);
  }

  buildData(): ChartData<'bar'> {
    const candidate = this.candidate();

    if (!candidate) {
      // Return empty chart data if candidate data is not loaded yet
      return { labels: [], datasets: [] };
    }

    // Build arrays for the candidate's ability scores and mocked requirement scores
    const candidateScores: number[] = [];
    const mockRequirementScores: number[] = [];

    this.labels().forEach((label) => {
      // Find the candidate's ability score for the current label (ability name)
      const candidateAbility = candidate.abilities.find(
        (ability) => ability.name === label
      );
      candidateScores.push(candidateAbility ? candidateAbility.score : 0);

      // Generate a mock requirement score between 50 and 100
      const mockScore = Math.floor(Math.random() * 6) + 3;
      mockRequirementScores.push(mockScore);
    });

    // Return chart data in the format expected by Chart.js
    return {
      labels: this.labels(),
      datasets: [
        {
          label: 'Real', // Candidate's abilities
          data: candidateScores,
          backgroundColor: 'rgba(54, 162, 235, 0.8)', // Blue color for candidate's scores
        },
        {
          label: 'Expected', // Mocked opening's requirements
          data: mockRequirementScores,
          backgroundColor: 'rgba(255, 255, 255, 0.8)', // White color for opening's requirements
        },
      ],
    };
  }

  radarChartData: Signal<ChartData<'radar'>> = computed(() => {
    return {
      labels: [
        ...this.bestAbilities().map(ability => ability.name),
        ...this.worstAbilities().map(ability => ability.name),
      ],
      datasets: [
        {
          label: 'Top Abilities',
          data: this.bestAbilities().map(ability => ability.score).concat([0, 0, 0]), // Top abilities with zeros for bottom slots
          backgroundColor: 'rgba(76, 175, 80, 0.2)', // Light green for top abilities
          borderColor: '#4CAF50',
          pointBackgroundColor: '#4CAF50',
        },
        {
          label: 'Bottom Abilities',
          data: [0, 0, 0].concat(this.worstAbilities().map(ability => ability.score)), // Bottom abilities with zeros for top slots
          backgroundColor: 'rgba(255, 87, 34, 0.2)', // Light red for bottom abilities
          borderColor: '#FF5722',
          pointBackgroundColor: '#FF5722',
        },
      ],
    };
  });

  radarChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#FFFFFF',
        },
      },
    },
    scales: {
      r: {
        beginAtZero: true,
        max: 10,
        ticks: {
          backdropColor: 'transparent',
          color: '#FFFFFF',
        },
        grid: {
          color: '#FFFFFF',
        },
      },
    },
  };

  getScoreColor(score: number): string {
    const hue = (score / 10) * 120; // 0 for red, 120 for green
    return `hsl(${hue}, 100%, 50%)`;
  }
}
