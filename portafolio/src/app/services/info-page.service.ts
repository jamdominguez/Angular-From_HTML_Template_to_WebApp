import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataPage } from '../interfaces/data-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info: DataPage = {};
  infoLoaded: boolean = false;
  team: any = [];
  teamLoaded: boolean = false;

  constructor(private http: HttpClient) {
    console.log('InfoPageService - LOADED');
    this.loadInfo();
    this.loadTeam();
  }

  private loadInfo() {
    this.http.get('assets/data/data-page.json').subscribe((resp: DataPage) => {
      this.infoLoaded = true;
      this.info = resp;
      //console.log(resp);
    });
  }

  private loadTeam() {
    this.http.get('https://angular-from-html-to-webapp-default-rtdb.europe-west1.firebasedatabase.app/work_team.json').subscribe((resp: any) => {
      this.teamLoaded = true;
      this.team = resp;
      //console.log(resp);
    });
  }

}