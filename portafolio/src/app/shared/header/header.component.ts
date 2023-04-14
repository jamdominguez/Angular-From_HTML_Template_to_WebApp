import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InfoPageService } from 'src/app/services/info-page.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public infoPageService: InfoPageService, private router: Router) {
  }

  public searchItem(value: String) {
    if (value.length < 1) {
      return
    }
    
    this.router.navigate(['/search', value]);
  }
}