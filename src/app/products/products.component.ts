import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductStructure } from '../_model/product.model';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productList: ProductStructure[] = [];
  filterProductName = "";

  constructor(private productService: ProductService, private modelService: NgbModal) { }

  ngOnInit(): void {
    this.productService.getProducts() . subscribe(response => {
      this.productList = response;
    });
  }

  open( pName, pDescription, pPrice ) {
    const modalRef = this.modelService.open(ProductDetailComponent);
    modalRef.componentInstance.name=pName;
    modalRef.componentInstance.desc = pDescription;
    modalRef.componentInstance.price = pPrice;
  }

}
