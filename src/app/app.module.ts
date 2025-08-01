import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { MenuCardComponent } from './menu-card/menu-card.component';
import { AllChampionsComponent } from './all-champions/all-champions.component';
import { FreeChampsComponent } from './champ-rotation/champ-rotation.component';
import { RandomChampionComponent } from './random-champion/random-champion.component';
import { RandomItemsComponent } from './random-items/random-items.component';
import { SharedComponent } from './shared/shared.component';
import { FooterComponent } from './shared/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MenuCardComponent,
    AllChampionsComponent,
    FreeChampsComponent,
    RandomChampionComponent,
    RandomItemsComponent,
    SharedComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatSidenavModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
