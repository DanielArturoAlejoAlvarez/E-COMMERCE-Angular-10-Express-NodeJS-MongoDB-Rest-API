import { Component, OnInit } from '@angular/core';
import Product from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productForm: Product = {
    name: '',
    category: '',
    excerpt: '',
    description: '',
    price: 0,
    stock: 0,
    image: '',
    status: true
  }

  
  constructor(private _ps: ProductService) { }

  ngOnInit(): void {
    this.listProduct()
  }

  

  addProduct() {
    this._ps.saveProduct(this.productForm)
      .subscribe(data=>{
        if (!data.ok) {
          alert("ERROR!!")
        }else{
          alert("Product saved successfully!")
        }
      },
      err=>{
        console.log(err)
      })
  }

  listProduct() {
    
  }

}
