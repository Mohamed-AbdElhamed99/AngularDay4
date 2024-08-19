import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductsServiceService } from '../../services/products-service.service';
import { IProduct } from '../../models/iproduct';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-listing',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-listing.component.html',
  styleUrl: './product-listing.component.css'
})
export class ProductListingComponent implements OnInit{
  
  products:IProduct[] = [];

  productService:ProductsServiceService;
  constructor( productsService:ProductsServiceService  , private router:Router ){
    this.productService = productsService
  }
  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
    console.log(this.products);
  }

  delete(id:any){
  
    this.products  = this.productService.removePorduct(id);
    
  }
}
