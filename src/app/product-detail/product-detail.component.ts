import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() name;
  @Input() desc;
  @Input() price;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
