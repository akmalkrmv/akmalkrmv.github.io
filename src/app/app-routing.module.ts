import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./bio/bio.module').then((m) => m.BioModule),
  },
  {
    path: 'unity',
    loadChildren: () =>
      import('./unity/unity.module').then((m) => m.UnityModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
