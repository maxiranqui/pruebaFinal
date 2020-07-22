import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ComponentConsultarService{
    [x: string]: any;
    constructor(private httpClient: HttpClient){}

    getPasajero(): Observable<any>{
        return this.httpClient.get('./assets/Pasajero.json');
    }
}    