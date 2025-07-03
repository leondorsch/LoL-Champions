import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChampionService {
  private apiUrl = 'https://ddragon.leagueoflegends.com/cdn/14.13.1/data/de_DE/champion.json';

  constructor(private http: HttpClient) {}

  getChampions(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}