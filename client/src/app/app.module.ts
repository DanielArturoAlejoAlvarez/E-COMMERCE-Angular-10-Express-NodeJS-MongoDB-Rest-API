import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { JwtModule } from '@auth0/angular-jwt'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ToastrModule } from 'ngx-toastr'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ProductComponent } from './components/product/product.component';
import { OrderComponent } from './components/order/order.component';


import { AuthService } from './services/auth.service';
import { LoginService } from './services/login.service';
import { ProductService } from './services/product.service';
import { UserService } from './services/user.service';
import { AuthGuard } from './shared/guards/auth.guard';
import { CategoryService } from './services/category.service';
import { OrderService } from './services/order.service';
import { ClientService } from './services/client.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NavbarComponent,
    LoginComponent,
    ProductComponent,
    OrderComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: function  tokenGetter() { 
          return localStorage.getItem('token');
        } 
      }
    }),
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    })
  ],
  providers: [AuthService,LoginService,ClientService,ProductService,CategoryService,OrderService,UserService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
