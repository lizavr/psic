import { RouterModule, Routes } from '@angular/router';
import { LayoutComponentComponent } from './components/layout-component/layout-component.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponentComponent,
    children: [
      {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full',
      },
      {
        path: 'main',
        loadComponent: () =>
          import('./components/main/main.component').then(
            (c) => c.MainComponent
          ),
      },
      {
        path: 'tests',
        loadComponent: () =>
          import('./components/tests/tests.component').then(
            (c) => c.TestsComponent
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
