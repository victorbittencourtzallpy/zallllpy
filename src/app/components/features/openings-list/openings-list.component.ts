import { Component, Signal, computed, signal } from '@angular/core';
import { IMinimalOpening, IOpening } from '../../../models/Opening';
import { OpeningsService } from '../../../services/openings.service';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { Router } from '@angular/router';

@Component({
  selector: 'app-openings-list',
  standalone: true,
  imports: [
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatTableModule,
    MatButtonModule,
    MatChipsModule,
  ],
  templateUrl: './openings-list.component.html',
  styleUrl: './openings-list.component.scss',
})
export class OpeningsListComponent {
  openings: Signal<IOpening[]> = signal([]);
  dataSource: Signal<IMinimalOpening[]> = computed(() => {
    const openings = this.openings();
    return openings.map((opening: IOpening) => {
      const minimalOpening: IMinimalOpening = {
        id: opening.id,
        title: opening.title,
        open_date: opening.open_date,
        number_of_applicants: opening.number_of_applicants,
        status: opening.status,
      };
      return minimalOpening;
    });
  });

  constructor(private openingsService: OpeningsService, private router: Router) {
    this.openingsService.fetchAllOpenings();
    this.openings = this.openingsService.getOpenings();
  }

  navigateTo(id: number | string) {
    this.router.navigate(['/openings', id])
  }

  displayedColumns: string[] = [
    'title',
    'open_date',
    'number_of_applicants',
    'status',
  ];

}
