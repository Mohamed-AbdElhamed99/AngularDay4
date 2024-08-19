import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { IProduct } from '../../../models/iproduct';
import { ProductsServiceService } from '../../../services/products-service.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  product:IProduct = {} as IProduct;

  constructor(private activatedRoute:ActivatedRoute, private productService:ProductsServiceService){}

  ngOnInit(): void {
    this.product = this.productService.getProductById(this.activatedRoute.snapshot.params['id']);
  }


}
