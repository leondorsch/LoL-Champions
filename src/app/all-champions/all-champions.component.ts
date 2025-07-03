import { Component, OnInit } from '@angular/core';
import { ChampionService } from '../services/champion.service';

@Component({
  selector: 'app-all-champions',
  templateUrl: './all-champions.component.html',
  styleUrls: ['./all-champions.component.scss']
})
export class AllChampionsComponent implements OnInit {
  champions: any[] = [];

  constructor(private championService: ChampionService) { }

  ngOnInit(): void {
    this.championService.getChampions().subscribe((data: any) => {
      this.champions = Object.values(data.data); 
      console.log(this.champions)
    });
  }
}
