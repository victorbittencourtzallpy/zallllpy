import { Component, OnInit, Signal, signal } from '@angular/core';
import { Candidate } from '../../../models/Candidate';
import { CandidateService } from '../../../services/candidates.service';
import { CandidateComponent } from '../../shared/candidate/candidate.component';

@Component({
  selector: 'app-candidates',
  standalone: true,
  imports: [CandidateComponent],
  templateUrl: './candidates.component.html',
  styleUrl: './candidates.component.scss'
})
export class CandidatesComponent implements OnInit{
  candidates: Signal<Candidate[]> = signal<Candidate[]>([]);

  constructor (private candidatesService: CandidateService) {
    this.candidatesService.fetchAllCandidates();
  }

  ngOnInit(): void {
    this.candidates = this.candidatesService.getCandidates();
  }

}
