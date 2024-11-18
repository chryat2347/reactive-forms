import { Routes } from '@angular/router';
import { HabitFormComponent } from "./habit-form/habit-form.component";
import { Route2Component } from "./route-2/route-2.component";
import { Route3Component } from "./route-3/route-3.component";

export const routes: Routes = [
  { path: "*", component: HabitFormComponent },
  {
    path: "habits", component: HabitFormComponent
    // loadChildren: () => import('./items/items.module').then(m => m.ItemsModule)
  },
  { path: "route2", component: Route2Component },
  { path: "route3", component: Route3Component }
];
