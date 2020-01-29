import { NgModule } from '@angular/core';
import { Routes, PreloadAllModules, RouterModule, Router } from '@angular/router';



const routes: Routes = [
  { path: '', loadChildren: () => import('../repos/repos.module').then(m => m.ReposModule) }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
