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

  token = localStorage.getItem('token');

  products: [];
  categories: [];

  constructor(private _ps: ProductService, private _cs: CategoryService) {}

  ngOnInit(): void {
    this.listCategory();
    this.listProduct();
  }

  loadImage(img: any) {
    this.image = img.target.files[0];
    console.log(this.image);
  }
  addProduct() {
    this._ps.saveProduct(this.productForm, this.image).subscribe(
      (data) => {
        if (!data.ok) {
          alert('ERROR!!');
        } else {
          console.log(data);
          alert('Product saved successfully!');
          this.productForm = {
            name: '',
            category: {},
            excerpt: '',
            description: '',
            price: 0,
            stock: 0,
            image: '',
            status: true,
          };
          this.listProduct();
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  listProduct() {
    this._ps.getProducts().subscribe(
      (data) => {
        this.products = data;
        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  listCategory() {
    this._cs.getCategories().subscribe(
      (data) => {
        this.categories = data;
        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
