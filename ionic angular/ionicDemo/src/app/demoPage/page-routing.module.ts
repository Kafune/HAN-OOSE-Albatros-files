import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { page } from './page';

const routes: Routes = [
  {
    path: '',
    component: page,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
