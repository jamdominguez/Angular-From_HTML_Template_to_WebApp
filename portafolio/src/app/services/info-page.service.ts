import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info: any = {};
  infoLoaded: boolean = false;

  constructor(private http: HttpClient) { 
    console.log('InfoPageService - LOADED');

    this.http.get('assets/data/data-page.json').subscribe(resp => {
      this.infoLoaded = true;
      this.info = resp;
      console.log(resp);
    });

  }
}