import { IProduct } from './../models/iproduct';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  products:IProduct[] = [
    {
      id: 1,
      name: 'Espresso',
      image: 'images/img-2.png',
      price: 999.99,
      quantity:10,
      description: 'Noise-cancelling headphones for immersive sound experience.'
    },
    {
      id: 2,
      name: 'Americano',
      image: 'images/img-3.png',
      price: 699.99,
      quantity:9,
      description: 'Noise-cancelling headphones for immersive sound experience.'
    },
    {
      id: 3,
      name: 'Latte',
      image: 'images/img-4.png',
      quantity:20,
      price: 199.99,
      description: 'Noise-cancelling headphones for immersive sound experience.'
    },
    {
      id: 4,
      name: 'Latte',
      image: 'images/img-5.png',
      quantity:30,
      price: 249.99,
      description: 'Noise-cancelling headphones for immersive sound experience.'
    },
    {
      id: 5,
      name: 'Latte',
      image: 'images/img-2.png',
      price: 999.99,
      quantity:19,
      description: 'Noise-cancelling headphones for immersive sound experience.'
    },
    {
      id: 6,
      name: 'Mocha',
      image: 'images/img-3.png',
      price: 699.99,
      quantity:12,
      description: 'Noise-cancelling headphones for immersive sound experience.'
    },
    {
      id: 7,
      name: 'Flat White',
      image: 'images/img-4.png',
      quantity:9,
      price: 199.99,
      description: 'Noise-cancelling headphones for immersive sound experience.'
    },
    {
      id: 8,
      name: 'Cortado',
      image: 'images/img-5.png',
      price: 249.99,
      quantity:9,
      description: 'Noise-cancelling headphones for immersive sound experience.'
    },
    {
      id: 9,
      name: 'Affogato',
      image: 'images/img-5.png',
      price: 249.99,
      quantity:9,
      description: 'Noise-cancelling headphones for immersive sound experience.'
    }
  ];

  constructor() { }

  getAllProducts() : IProduct[]
  {
    console.log('service');
    return this.products;
  }

  getProductById(id:number)
  {
    return this.products.find(p => p.id == id) ||  {} as IProduct ;
  }

  addProduct(Product:IProduct)
  {
    return this.products.push(Product);
  }

  removePorduct(id:number)
  {
   
    this.products = this.products.filter(product => product.id !== id);
    return this.products;
  }

  editProduct(id:number , product:IProduct)
  {
    return this.products.forEach(p => {
      if(p.id == id)
      {
        p = product
      }
    })  
  }
}
