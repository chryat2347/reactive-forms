import { Component, ViewChild, OnInit } from '@angular/core';
import {
  RouterLink,
  RouterModule,
  RouterLinkActive,
  RouterOutlet,
  Routes,
  RouterLinkWithHref
} from '@angular/router';
import { HabitFormComponent } from "./habit-form/habit-form.component";

const routes: Routes = [];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    HabitFormComponent,
    RouterLinkWithHref
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  constructor() {}
  title: string = 'my-version';
  header: string = 'Groceries'

  ngOnInit() {}
  // ngDoCheck() {}
  // ngAfterViewInit() {}
  // ngOnDestroy() {}
}

/*


import { APP_ROUTES } from './app/app.routes';
[...]

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule),
    provideRouter(APP_ROUTES,
      withPreloading(PreloadAllModules),
      withDebugTracing(),
    ),

    [...]

    importProvidersFrom(TicketsModule),
    provideAnimations(),
    importProvidersFrom(LayoutModule),
  ]
});

 */
