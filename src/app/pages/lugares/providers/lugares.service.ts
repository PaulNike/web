import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Locations } from '../models/lugares.model';
import { Result } from '../models/lugares.model';

@Injectable({
  providedIn: 'root'
})
export class LugaresService {

  constructor(private httpClient:HttpClient) { 

  }

  getLugares(page: string = '1') {
    const url = `${environment.urlbase}${environment.endpoints.locations}/?page=${page}`;
    return this.httpClient.get<Locations>(url);
  }

  getLugar(id:string){
    const url = `${environment.urlbase}${environment.endpoints.locations}/${id}`;
    return this.httpClient.get<Result>(url);
  }

}
