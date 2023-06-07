import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-router.module';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { ClickOutsideModule } from 'ng-click-outside';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';
import { NgSelectModule } from '@ng-select/ng-select';


import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailComponent } from './pages/detail/detail.component';

import { HeaderComponent } from './components/header/header.component';
import { CategoryComponent } from './components/category/category.component';
import { SliderComponent } from './components/slider/slider.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './components/products/products.component';
import { LayoutAdminComponent } from './admin/layout-admin/layout-admin.component';
import { LayoutClientComponent } from './pages/layout-client/layout-client.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { FilterComponent } from './components/filter/filter.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { TopNavigateComponent } from './components/top-navigate/top-navigate.component';
import { CartComponent } from './pages/cart/cart.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HeaderAdminComponent } from './admin/components/header-admin/header-admin.component';
import { NavbarAdminComponent } from './admin/components/navbar-admin/navbar-admin.component';
import { CategoryAdminComponent } from './admin/category/category-admin/category-admin.component';
import { ProductAddComponent } from './admin/products/product-add/product-add.component';
import { ProductAdminComponent } from './admin/products/product-admin/product-admin.component';
import { ProductEditComponent } from './admin/products/product-edit/product-edit.component';
import { CategoryAddComponent } from './admin/category/category-add/category-add.component';
import { CategoryEditComponent } from './admin/category/category-edit/category-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PromotionAddComponent } from './admin/promotion/promotion-add/promotion-add.component';
import { PromotionAdminComponent } from './admin/promotion/promotion-admin/promotion-admin.component';
import { PromotionEditComponent } from './admin/promotion/promotion-edit/promotion-edit.component'; 
import { UserAdminComponent } from './admin/user/user-admin/user-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    HeaderComponent,
    CategoryComponent,
    SliderComponent,
    FooterComponent,
    ProductsComponent,
    LayoutAdminComponent,
    LayoutClientComponent,
    SigninComponent,
    SignupComponent,
    FilterComponent,
    ProductListComponent,
    TopNavigateComponent,
    CartComponent,
    CategoryAddComponent,
    CategoryEditComponent,
    NotFoundComponent,
    HeaderAdminComponent,
    NavbarAdminComponent,
    CategoryAdminComponent,
    ProductAddComponent,
    ProductAdminComponent,
    ProductEditComponent,
    PromotionAddComponent,
    PromotionAdminComponent,
    PromotionEditComponent,
    UserAdminComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ClickOutsideModule,
    ToastrModule.forRoot(),
    ToastNoAnimationModule.forRoot(),
    BrowserAnimationsModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
