import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class ChampionRotationService {
    private apiKey = environment.riotApiKey;
    private apiUrl = 'https://euw1.api.riotgames.com/lol/platform/v3/champion-rotations'

    constructor(private http: HttpClient) { }

    getFreeRotation(): Observable<any> {
        let url = `${this.apiUrl}?api_key=${this.apiKey}`;
        return this.http.get(url);
    }
}