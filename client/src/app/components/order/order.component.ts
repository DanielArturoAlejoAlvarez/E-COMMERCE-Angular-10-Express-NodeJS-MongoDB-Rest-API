import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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

  token = localStorage.getItem('token');

  orderForm = {
    payment: 0,
    qty: 1,
    product: '',
    price: 0,
    client: '',
    orderItems: [],
  };

  constructor(
    private _toastr: ToastrService,
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

  addToCart() {
    const data = this.orderForm.product.split('-');

    //search position
    const exist = this.orderForm.orderItems.findIndex(
      (p) => p.product_id == data[0]
    );
    if (exist != -1) {
      this.orderForm.orderItems[exist] = {
        product_id: data[0],
        product_name: data[2],
        qty: Number(this.orderForm.orderItems[exist].qty + this.orderForm.qty),
        price: data[1],
        subtotal:
          Number(this.orderForm.orderItems[exist].qty + this.orderForm.qty) *
          this.orderForm.price,
      };
    } else {
      this.orderForm.orderItems.push({
        product_id: data[0],
        product_name: data[2],
        qty: this.orderForm.qty,
        price: data[1],
        subtotal: this.orderForm.price * this.orderForm.qty,
      });
    }
    this.orderForm.payment += Number(this.orderForm.price * this.orderForm.qty);
  }

  deleteItem(id: number | string) {
    this.orderForm.orderItems = this.orderForm.orderItems.filter(
      (item) => item.product_id !== id
    );
    this.orderForm.payment = this.orderForm.orderItems
      .map((item) => item.subtotal)
      .reduce((a, b) => a + b, 0);
  }

  addOrder() {
    this._os.saveOrder(this.orderForm).subscribe(
      (data) => {
        if (!data.ok) {
          alert('ERROR!!');
        } else {
          console.log(data);
          //alert('Order saved successfully!');
          this._toastr.success('Order saved successfully!','SUCCESS:')
          this.orderForm = {
            payment: 0,
            qty: 1,
            product: '',
            price: 0,
            client: '',
            orderItems: [],
          };

          this.listOrder();
        }
      },
      (err) => {
        console.log(err);
        this._toastr.error(err, 'ERROR:')
      }
    );
  }

  listOrder() {
    this._os.getOrders().subscribe(
      (data) => {
        console.log(data);
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
