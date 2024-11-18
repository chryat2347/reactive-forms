import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import {
  PreloadAllModules,
  provideRouter,
  withComponentInputBinding, withDebugTracing,
  withPreloading,
  withRouterConfig
} from "@angular/router";
import { routes } from "./app/app.routes";
import { provideStore } from '@ngrx/store';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { importProvidersFrom } from "@angular/core";
import { provideAnimations } from "@angular/platform-browser/animations";
// import { reducer } from './app/+state';

bootstrapApplication(AppComponent, {
  // imports: [StoreModule.forRoot({ count: counterReducer })],
  providers: [
    provideHttpClient(withFetch()),
    provideRouter(
      routes,
      withComponentInputBinding(),
      withPreloading(PreloadAllModules),
      withDebugTracing()
    ),
    // Setup NGRX:
    // provideStore(reducer),
    // provideEffects([]),
    // provideStoreDevtools(),
    // importProvidersFrom(TicketsModule),
    provideAnimations(),
    // importProvidersFrom(LayoutModule)
    // provideStore()
],
}).catch((err) => console.error(err));
