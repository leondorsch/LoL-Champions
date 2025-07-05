import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllChampionsComponent } from './all-champions/all-champions.component';
import { FreeChampsComponent } from './champ-rotation/champ-rotation.component';
import { RandomChampionComponent } from './random-champion/random-champion.component';
import { RandomItemsComponent } from './random-items/random-items.component';

const routes: Routes = [
  {path: 'champions', component: AllChampionsComponent},
  {path: 'rotation', component: FreeChampsComponent},
  {path: 'randomChamp', component: RandomChampionComponent},
  {path: 'randomItems', component: RandomItemsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
