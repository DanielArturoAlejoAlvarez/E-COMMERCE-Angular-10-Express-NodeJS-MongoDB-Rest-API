import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  products: Array<any> = [];

  clients: Array<any> = [];

  orders: Array<any> = [];

  token = localStorage.getItem('token')

  orderForm = {
    payment: 0,
    qty: 1,
    product: '',
    price: 0,
    client: '',
    orderItems: [],
  };

  constructor(
    private _os: OrderService,
    private _ps: ProductService,
    private _cs: ClientService
  ) {}

  ngOnInit(): void {
    this.listOrder();
    this.listClient();
    this.listProduct();
  }

  putPrice() {
    console.log(this.orderForm.product);
    const data = this.orderForm.product.split('-');
    this.orderForm.price = Number(data[1]);
  }

  

  

  

  listOrder() {
    this._os.getOrders().subscribe(
      (data) => {
        console.log(data)
        this.orders = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  listClient() {
    this._cs.getClients().subscribe(
      (data) => {
        this.clients = data;
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
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
