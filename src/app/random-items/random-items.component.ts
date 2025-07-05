import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RandomItemsService } from '../services/random-items.service';


@Component({
  selector: 'app-random-items',
  templateUrl: './random-items.component.html',
  styleUrls: ['./random-items.component.scss']
})
export class RandomItemsComponent implements OnInit {
  items: any[] = [];
  randomItems: any[] = [];
  constructor(private RandomItemService: RandomItemsService) { }

  ngOnInit(): void {
    this.loadRandomItems();
  }

  loadRandomItems() {
    this.RandomItemService.getItems().subscribe((itemData: any) => {
      let allItems = Object.values(itemData.data)
      for (let i = 0; i <= 5; i++) {
        let randomIndex = Math.floor(Math.random() * allItems.length)
        let randomItem = allItems[randomIndex];
        this.randomItems.push(randomItem)
      }
    })
  }

}
