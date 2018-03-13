import { NgModule }             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DynamicFormComponent} from './dynamic-form/dynamic-form.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dynamic',
    pathMatch: 'full'
  },
  {
    path: 'dynamic',
    component: DynamicFormComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        // enableTracing: true, // <-- debugging purposes only
        // preloadingStrategy: SelectivePreloadingStrategy,
      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    // CanDeactivateGuard,
    // SelectivePreloadingStrategy
  ]
})
export class AppRoutingModule { }

