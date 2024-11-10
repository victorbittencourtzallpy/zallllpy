import { Component, OnInit, Signal, computed, signal } from '@angular/core';
import { OpeningsService } from '../../../../services/openings.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IOpening } from '../../../../models/Opening';
import { Candidate, MinimalCandidate } from '../../../../models/Candidate';
import { CandidateService } from '../../../../services/candidates.service';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { ProcessStep } from '../../../../enums/processSteps.enum';

@Component({
  selector: 'app-opening',
  standalone: true,
  imports: [
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatTableModule,
    MatButtonModule,
    MatChipsModule,
    CommonModule
  ],
  templateUrl: './opening.component.html',
  styleUrl: './opening.component.scss',
})
export class OpeningComponent implements OnInit {
  openingId: number;
  opening: Signal<IOpening | null> = signal<IOpening | null>(null);
  candidates: Signal<Candidate[]> = signal<Candidate[]>([]);
  dataSource: Signal<MinimalCandidate[]> = computed(() => {
    return this.candidates().map((candidate) => {
      const minimalCandidate: MinimalCandidate = {
        id: candidate.id,
        name: candidate.generalInfo.name,
        overallScore: candidate.overallScore,
        processStep: ProcessStep[candidate.generalInfo.processStep]
      };
      return minimalCandidate;
    });
  });

  displayedColumns: string[] = ['name', 'processStep', 'overallScore'];

  selectedMandatoryRequirements: Signal<Set<string>> = computed(() => {
    const mandatoryReqs = this.opening()?.requirements?.mandatory?.contracted;
    return new Set(mandatoryReqs ? mandatoryReqs : []);
  });
  
  selectedDesirableRequirements: Signal<Set<string>> = computed(() => {
    const desirableReqs = this.opening()?.requirements?.desirable?.contracted;
    return new Set(desirableReqs ? desirableReqs : []);
  });
  

  constructor(
    private openingsService: OpeningsService,
    private route: ActivatedRoute,
    private candidateService: CandidateService,
    private router: Router
  ) {
    this.candidateService.fetchAllCandidates();
  }

  ngOnInit(): void {
    this.openingId = Number(this.route.snapshot.paramMap.get('id')); // Get ID from route
    this.openingsService.fetchOpeningById(this.openingId);
    this.opening = this.openingsService.getCurrentoOpening();
    this.candidates = this.candidateService.getCandidates();
  }

  navigateTo(id: number): void {
    this.openingsService.setselectedRequirements(this.selectedMandatoryRequirements, this.selectedDesirableRequirements);
    this.router.navigate([`/openings/${this.openingId}/candidate`, id])
  }

  navigateBack() {
    this.router.navigate(['/openings']);
  }

  selectAllRequirements() {
    if (this.opening) {
      this.opening()?.requirements.mandatory.contracted.forEach(req => this.selectedMandatoryRequirements().add(req));
      this.opening()?.requirements.desirable.contracted.forEach(req => this.selectedDesirableRequirements().add(req));
    }
  }

  toggleSelection(req: string, type: 'mandatory' | 'desirable'): void {
    const targetSet = type === 'mandatory' ? this.selectedMandatoryRequirements : this.selectedDesirableRequirements;

    if (targetSet().has(req)) {
      targetSet().delete(req); // Deselect if already selected
    } else {
      targetSet().add(req); // Select if not selected
    }
  }

  isSelected(req: string, type: 'mandatory' | 'desirable'): boolean {
    const targetSet = type === 'mandatory' ? this.selectedMandatoryRequirements : this.selectedDesirableRequirements;
    return targetSet().has(req);
  }
}
