import { Component, OnInit } from '@angular/core';
import Product from 'src/app/models/Product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  productForm: Product = {
    name: '',
    category: {},
    excerpt: '',
    description: '',
    price: 0,
    stock: 0,
    image: '',
    status: true,
  };

  image: File;

  products: []
  categories: []

  constructor(private _ps: ProductService, private _cs: CategoryService) {}

  ngOnInit(): void {
    this.listCategory()
    this.listProduct();
  }

  loadImage(img: any) {
    this.image = img.target.files[0];
    console.log(this.image);
  }
  addProduct() {
    //console.log(this.productForm)
    //console.log(this.image)
    
  }

  listProduct() {
    this._ps.getProducts()
      .subscribe(data=>{
        this.products = data 
        console.log(data)
      },
      err=>{
        console.log(err)
      })
  }


  listCategory() {
    this._cs.getCategories()
      .subscribe(data=>{
        this.categories = data
        console.log(data)
      },
      err=>{
        console.log(err)
      })
  }
}
