import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { UnityRoutingModule } from './unity-routing.module';
import { UnityComponent } from './unity.component';
import { ParticlesComponent } from './particles/particles.component';

@NgModule({
  declarations: [UnityComponent, ParticlesComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatProgressBarModule,
    UnityRoutingModule,
  ],
})
export class UnityModule {}
