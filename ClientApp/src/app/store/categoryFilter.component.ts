import { Component } from "@angular/core";
import { Repository } from "../models/repository";
import { NavigationService } from '../models/navigation.service';

@Component({
  selector: "store-categoryfilter",
  templateUrl: "categoryFilter.component.html"
})
export class CategoryFilterComponent {

  constructor(private service: NavigationService) { }
}
