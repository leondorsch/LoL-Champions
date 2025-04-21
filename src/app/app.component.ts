import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lol-champions';
  constructor(){}

  async ngOnInit(){
    await this.fetchChampions()
  }

  async fetchChampions(){
    let response = await fetch('https://ddragon.leagueoflegends.com/cdn/15.8.1/data/en_US/champion.json');
    let fetchedResponse = await response.json();
    console.log(fetchedResponse.data)
  }
}
