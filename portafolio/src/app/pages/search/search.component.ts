import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(private route: ActivatedRoute, public productsService: ProductsService) {
    this.route.params.subscribe(params => {
      this.productsService.searchItem(params['value']);
    });
  }
}