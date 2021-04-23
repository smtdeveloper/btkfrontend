import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { Product } from 'src/app/models/product';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:Product[]=[];
  
  constructor(
    private productService:ProductService,
    private cartService:CartServiceService
    ) { }

  ngOnInit(): void {
    this.getProduct();
  }

  // rxjs
  getProduct(){
    this.productService.getProducts().subscribe(response =>{
      this.products = response.data
    } )
  }


  addToCart(cart:Cart){
    this.cartService.add(cart)

    console.log(cart);
  }

}
