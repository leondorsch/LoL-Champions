import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class ChampionRotationService {
    private backendUrl = 'https://riot-backend.onrender.com/rotation';

    constructor(private http: HttpClient) { }

    getFreeRotation(): Observable<any> {
        return this.http.get(this.backendUrl);
    }
}