import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Destroy02Component } from './destroy02/destroy02.component';
import { Destroy01Component } from './destroy01/destroy01.component';

const routes: Routes = [
  {
    path: "",
    component: Destroy01Component
  },
  {
    path: "des02",
    component: Destroy02Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
