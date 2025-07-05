import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})


export class RandomItemsService {
    private apiUrl = 'https://ddragon.leagueoflegends.com/cdn/14.13.1/data/en_US/item.json';

    constructor(private http: HttpClient) { }

    getItems(): Observable<any> {
        return this.http.get(this.apiUrl);
    }
}