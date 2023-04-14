import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemDetail } from 'src/app/interfaces/item-detail.inteface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  item: ItemDetail = {};
  itemId: String = '';

  constructor(private route: ActivatedRoute, public productsService: ProductsService) {
    this.route.params.subscribe(urlParams => {
      this.itemId = urlParams['id'];
      this.productsService.getProduct(this.itemId).subscribe((itemResp: ItemDetail) => {
        this.item = itemResp;
      });
    })
  }
}