import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';




export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(),
    importProvidersFrom(MatIconModule),
    importProvidersFrom(MatSidenavModule),
    importProvidersFrom(MatToolbarModule),
    importProvidersFrom(MatListModule),
    importProvidersFrom(MatTableModule),
    importProvidersFrom(MatButtonModule),
    importProvidersFrom(MatChipsModule),
    provideCharts(withDefaultRegisterables())
  ],
};
