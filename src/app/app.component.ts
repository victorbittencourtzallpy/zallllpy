import { Component, effect, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LogoComponent } from './components/core/logo/logo.component';
import { TopNavComponent } from './components/core/top-nav/top-nav.component';
import { SideNavComponent } from './components/core/side-nav/side-nav.component';
import { MainContentComponent } from './components/core/main-content/main-content.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routes';
import { MatIconModule } from '@angular/material/icon';
import { FloatingChatComponent } from './components/core/floating-chat/floating-chat.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LogoComponent,
    TopNavComponent,
    SideNavComponent,
    MainContentComponent,
    HttpClientModule,
    AppRoutingModule,
    MatIconModule,
    RouterLink,
    RouterLinkActive,
    FloatingChatComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor() {}

  title = 'zambi';
}
