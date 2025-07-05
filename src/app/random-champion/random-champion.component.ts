import { Component, OnInit } from '@angular/core';
import { ChampionService } from '../services/champion.service';


@Component({
  selector: 'app-random-champion',
  templateUrl: './random-champion.component.html',
  styleUrls: ['./random-champion.component.scss']
})
export class RandomChampionComponent implements OnInit {
  champion: any = null; 
  constructor(private championService: ChampionService) {}

  ngOnInit(): void {
    this.loadRandomChamp();
  }

  loadRandomChamp(): void {
    this.championService.getChampions().subscribe((champData: any) => {
      const allChamps = Object.values(champData.data);
      
      const randomIndex = Math.floor(Math.random() * allChamps.length);
      const randomChampion = allChamps[randomIndex];
      
      this.champion = randomChampion;
    });
  }

}
