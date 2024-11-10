import { Injectable, Signal, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Candidate } from '../models/Candidate';
import { CandidateAbility } from '../models/Ability';
import { candidates } from '../constants/candidates.const';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  private readonly BASE_URL = 'http://localhost:3000/candidates';

  // Define signals to hold the list of candidates and the selected candidate
  candidatesSignal = signal<Candidate[]>([]);
  selectedCandidateSignal = signal<Candidate | null>(null);

  constructor(private http: HttpClient) {}

  fetchAllCandidates(): void {
    // this.http.get<Candidate[]>(this.BASE_URL).subscribe({
    //   next: (response) => {
        this.candidatesSignal.set(candidates);
      //   console.log('Fetched candidates:', response);
      // },
      // error: (error) => {
      //   console.error('Error fetching candidates:', error);
      // }
    // }
  // );
  }
  
  fetchCandidateById(id: number): void {
    this.selectedCandidateSignal.set(candidates[id-1]);
    // this.http.get<Candidate>(`${this.BASE_URL}/${id}`).subscribe({
    //   next: (response) => {
    //     if (response) this.selectedCandidateSignal.set(response);
    //     console.log('Fetched candidate:', response);
    //   },
    //   error: (error) => {
    //     console.error(`Error fetching candidate with ID ${id}:`, error);
    //   }
    // });
  }
  

  getCandidates(): Signal<Candidate[]> {
    return this.candidatesSignal;
  }

  getSelectedCandidate(): Signal<Candidate | null> {
    return this.selectedCandidateSignal;
  }

  
}
