import { Injectable } from "@angular/core";
import { Repository } from './models/repository';
import { Product } from './models/product.model';

@Injectable()
export class ExternalService {

  constructor(private repository: Repository) {
    window["angular_searchProducts"] = this.doSearch.bind(this);
  }

  doSearch(searchTerm: string): Product[] {
    let lowerTerm = searchTerm.toLowerCase();
    return this.repository.products
      .filter(p => p.name.toLowerCase().includes(lowerTerm)
        || p.description.toLowerCase().includes(lowerTerm));
  }
}
