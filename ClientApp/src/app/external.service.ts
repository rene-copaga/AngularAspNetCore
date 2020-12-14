import { Injectable, NgZone } from "@angular/core";
import { Repository } from './models/repository';
import { Product } from './models/product.model';

@Injectable()
export class ExternalService {

  constructor(private repository: Repository, private zone: NgZone) {
    window["angular_searchProducts"] = this.doSearch.bind(this);
  }

  async doSearch(searchTerm: string): Promise<Product[]> {
    return this.zone.run(async () => {
      this.repository.filter.search = searchTerm;
      return (await this.repository.getProducts()).data;
    })
  }
}
