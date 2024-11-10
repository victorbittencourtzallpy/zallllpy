import { Injectable, Signal, signal } from '@angular/core';
import { IOpening } from '../models/Opening';
import { HttpClient } from '@angular/common/http';
import { openings } from '../constants/openings.constants';

@Injectable({
  providedIn: 'root',
})
export class OpeningsService {
  private readonly BASE_URL = 'http://localhost:3000/openings';

  selectedDesirableRequirements: Signal<Set<string>> = signal<Set<string>>(
    new Set<string>()
  );
  selectedMandatoryRequirements: Signal<Set<string>> = signal<Set<string>>(
    new Set<string>()
  );

  // Define signals to hold the list of candidates and the selected candidate
  openingsSignal = signal<IOpening[]>([]);
  currentOpening = signal<IOpening | null>(null);

  constructor(private http: HttpClient) {}

  // Fetch all candidates and update the candidatesSignal directly
  async fetchAllOpenings(): Promise<void> {
    try {
      // await this.http.get<IOpening[]>(this.BASE_URL).subscribe((response) => {
      //   this.openingsSignal.set(response);
      // });
      this.openingsSignal.set(openings);
    } catch (error) {
      console.error('Error fetching candidates:', error);
    }
  }

  getOpenings(): Signal<IOpening[]> {
    return this.openingsSignal;
  }

  async fetchOpeningById(id: number): Promise<void> {
    try {
      // await this.http
      //   .get<IOpening>(`${this.BASE_URL}/${id}`)
      //   .subscribe((response) => {
      //     this.currentOpening.set(response);
      //   });
      this.currentOpening.set(openings[id-1])
    } catch (error) {
      console.error('Error fetching opening: ', error);
    }
  }

  getCurrentoOpening(): Signal<IOpening | null> {
    return this.currentOpening;
  }

  setselectedRequirements(
    mandatory: Signal<Set<string>>,
    desirable: Signal<Set<string>>
  ) {
    const newDesirable = new Set(desirable());
    this.selectedDesirableRequirements = signal<Set<string>>(newDesirable);
    this.selectedMandatoryRequirements = mandatory;
  }

  getselectedDesirableRequirements(): Signal<Set<string>> {
    return this.selectedDesirableRequirements;
  }

  getselectedMandatoryRequirements(): Signal<Set<string>> {
    return this.selectedMandatoryRequirements;
  }
}
