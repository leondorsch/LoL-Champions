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
    if (this.randomItems) {
      this.randomItems = [];
    }
    this.RandomItemService.getItems().subscribe((itemData: any) => {
      let allItems = Object.values(itemData.data)
      this.filterBootsAndPushInArray(allItems);
      this.filterItemsAndPushInArray(allItems);
    })
  }

  filterBootsAndPushInArray(allItems:any[]){
    for (let i = 0; this.randomItems.length < 1; i++) {
      let randomItemIndex = Math.floor(Math.random() * allItems.length)
      let randomItem: any = allItems[randomItemIndex];
      this.checkIfBootIsValid(randomItem);
    }
  }

  filterItemsAndPushInArray(allItems: any[]) {
    for (let i = 0; this.randomItems.length <= 5; i++) {
      let randomItemIndex = Math.floor(Math.random() * allItems.length)
      let randomItem: any = allItems[randomItemIndex];
      this.checkIfItemIsValid(randomItem);
    }
    console.log(this.randomItems)
  }

  checkIfItemIsValid(randomItem: any) {
    if (!this.randomItems.includes(randomItem) && randomItem.maps[11] && randomItem.inStore !== false && !randomItem.consumed && randomItem.from && !randomItem.into && !randomItem.tags.includes('Boots')) {
      this.randomItems.push(randomItem)
    }
  }

  checkIfBootIsValid(randomItem: any){
    if(!this.randomItems.includes(randomItem) && randomItem.maps[11] && randomItem.inStore !== false && !randomItem.consumed && randomItem.from && randomItem.tags.includes('Boots')){
      this.randomItems.push(randomItem)
    } else {
      return false
    }
  }
}
