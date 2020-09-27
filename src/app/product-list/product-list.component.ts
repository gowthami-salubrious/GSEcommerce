import { Component, OnInit } from '@angular/core';
import { ProductStructure } from '../_model/product.model';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: ProductStructure[] = [];
  currentOrientation = 'horizontal';
  images = ['banner1.jpg', 'banner2.jpg', 'banner3.jpg'].map((n) => `assets/images/${n}`);
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts() . subscribe(response => {
      this.products = response;
    });
  }

  

}
