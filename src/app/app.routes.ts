import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatesComponent } from './components/features/candidates/candidates.component';
import { OpeningsListComponent } from './components/features/openings-list/openings-list.component';
import { OpeningComponent } from './components/features/openings-list/opening/opening.component';
import { CandidateComponent } from './components/shared/candidate/candidate.component';
import { AutoviewComponent } from './components/features/autoview/autoview.component';

export const routes: Routes = [
    { path: '', redirectTo: '/openings', pathMatch: 'full' }, // Redirect to Home on root path
    { path: 'openings/:openingId/candidate/:candidateId', component: CandidateComponent },
    { path: 'candidates', component: CandidatesComponent },
    { path: 'candidates/:id', component: CandidateComponent },
    { path: 'openings', component: OpeningsListComponent },
    { path: 'openings/:id', component: OpeningComponent },
    { path: 'autoview', component: AutoviewComponent },

  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}
