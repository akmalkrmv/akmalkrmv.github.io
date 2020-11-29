import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnityRoutingModule } from './unity-routing.module';
import { UnityComponent } from './unity.component';
import { ParticlesComponent } from './particles/particles.component';


@NgModule({
  declarations: [UnityComponent, ParticlesComponent],
  imports: [
    CommonModule,
    UnityRoutingModule
  ]
})
export class UnityModule { }
