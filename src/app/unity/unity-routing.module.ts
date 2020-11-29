import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParticlesComponent } from './particles/particles.component';

import { UnityComponent } from './unity.component';

const routes: Routes = [
  {
    path: '',
    component: UnityComponent,
    children: [{ path: 'particles', component: ParticlesComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnityRoutingModule {}
