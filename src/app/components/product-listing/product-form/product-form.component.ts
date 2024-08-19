import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { IProduct } from '../../../models/iproduct';
import { ProductsServiceService } from '../../../services/products-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [RouterLink , FormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent implements OnInit {
  idParam:any ;
  product:IProduct = { id : 0 , name:"" , description:"" , image:"" , price:0 , quantity:0 };

  constructor(private activatedRoute:ActivatedRoute ,private productService:ProductsServiceService , private router:Router){

  }


  ngOnInit(): void {
    this.idParam = this.activatedRoute.snapshot.params['id'];
     if(this.idParam != 0)
     {
      this.product = this.productService.getProductById(this.idParam);
     }
  }

  submitForm()
  {
    if(this.idParam == 0)
    {
      this.product.id = this.productService.getAllProducts().length + 1
      this.productService.addProduct(this.product)
    }else{
      this.productService.editProduct(this.idParam , this.product);
    }
    this.router.navigate(['/products-listing'])
  }
}
