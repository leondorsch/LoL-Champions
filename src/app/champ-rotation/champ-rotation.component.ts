import { Component, OnInit } from '@angular/core';
import { ChampionService } from '../services/champion.service';
import { ChampionRotationService } from '../services/champion-rotation.service';

@Component({
  selector: 'app-free-champs',
  templateUrl: './champ-rotation.component.html',
  styleUrls: ['./champ-rotation.component.scss']
})
export class FreeChampsComponent implements OnInit {
  freeChamps: any[] = [];

  constructor(
    private championService: ChampionService,
    private ChampionRotationService: ChampionRotationService
  ) {}

  ngOnInit(): void {
    this.loadFreeChamps();
  }

  loadFreeChamps(): void {
    this.championService.getChampions().subscribe((champData: any) => {
      let allChamps = Object.values(champData.data);
      
      this.ChampionRotationService.getFreeRotation().subscribe((rotation: any) => {
        let freeIds: number[] = rotation.freeChampionIds;

        
        this.freeChamps = allChamps.filter((champ: any) =>
          freeIds.includes(+champ.key) 
        );
        console.log(this.freeChamps)
      });
    });
  }
}
