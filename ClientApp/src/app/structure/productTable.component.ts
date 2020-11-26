import { Repository } from '../models/repository';
import { Product } from '../models/product.model';
import { Component } from '@angular/core';

@Component({
  selector: "product-table",
  templateUrl: "./productTable.component.html"
})
export class ProductTableComponent {

  constructor(private repo: Repository) { }

  get products(): Product[] {
    return this.repo.products;
  }
}
