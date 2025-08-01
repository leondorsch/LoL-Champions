import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class ChampionRotationService {
    private apiKey = `https://euw1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=${environment.riotApiKey}`;

    constructor(private http: HttpClient) { }

    getFreeRotation(): Observable<any> {
        return this.http.get(this.apiKey);
    }
}