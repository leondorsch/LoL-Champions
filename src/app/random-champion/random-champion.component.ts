import { Component, OnInit } from '@angular/core';
import { ChampionService } from '../services/champion.service';


@Component({
  selector: 'app-random-champion',
  templateUrl: './random-champion.component.html',
  styleUrls: ['./random-champion.component.scss']
})
export class RandomChampionComponent implements OnInit {
  champion: any = null; 
  picking: boolean = false;
  constructor(private championService: ChampionService) {}

  ngOnInit(): void {
    this.loadRandomChamp();
  }

  loadRandomChamp(): void {
    this.picking = false;
    setTimeout(() => {
      this.picking = true
    }, 500);
    this.championService.getChampions().subscribe((champData: any) => {
      let allChamps = Object.values(champData.data);
      
      let randomIndex = Math.floor(Math.random() * allChamps.length);
      let randomChampion = allChamps[randomIndex];
      
      this.champion = randomChampion;
      console.log(this.champion)
    });
  }

}
