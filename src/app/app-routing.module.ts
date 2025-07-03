import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllChampionsComponent } from './all-champions/all-champions.component';

const routes: Routes = [
  {path: 'champions', component: AllChampionsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
