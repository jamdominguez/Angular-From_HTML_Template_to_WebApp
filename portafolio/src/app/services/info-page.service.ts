import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataPage } from '../interfaces/data-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info: DataPage = {};
  infoLoaded: boolean = false;

  constructor(private http: HttpClient) { 
    console.log('InfoPageService - LOADED');

    this.http.get('assets/data/data-page.json').subscribe((resp: DataPage) => {
      this.infoLoaded = true;
      this.info = resp;
      console.log(resp);
    });

  }
}