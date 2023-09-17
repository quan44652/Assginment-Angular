import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { LayoutClientComponent } from './pages/layout-client/layout-client.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailComponent } from './pages/detail/detail.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { CartComponent } from './pages/cart/cart.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LayoutAdminComponent } from './admin/layout-admin/layout-admin.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductAdminComponent } from './admin/products/product-admin/product-admin.component';
import { ProductAddComponent } from './admin/products/product-add/product-add.component';
import { ProductEditComponent } from './admin/products/product-edit/product-edit.component';
import { CategoryAdminComponent } from './admin/category/category-admin/category-admin.component';
import { CategoryAddComponent } from './admin/category/category-add/category-add.component';
import { CategoryEditComponent } from './admin/category/category-edit/category-edit.component';
import { prefix } from '@fortawesome/free-solid-svg-icons';
import { PromotionEditComponent } from './admin/promotion/promotion-edit/promotion-edit.component';
import { PromotionAddComponent } from './admin/promotion/promotion-add/promotion-add.component';
import { PromotionAdminComponent } from './admin/promotion/promotion-admin/promotion-admin.component';
import { UserAdminComponent } from './admin/user/user-admin/user-admin.component';
import { OrderComponent } from './admin/order/order.component';

const routes: Routes = [

  
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'cart', component: CartComponent },
 
  {path: "admin" , component:LayoutAdminComponent, children: [
    {path:"",redirectTo:"admin/products",pathMatch: 'full'},
    {path:"products", component:ProductAdminComponent},
    {path:"products/add", component:ProductAddComponent},
    {path:"products/edit/:id", component:ProductEditComponent},
    {path:"category",component:CategoryAdminComponent},
    {path:"category/add",component:CategoryAddComponent},  
    {path:"category/edit/:id",component:CategoryEditComponent},
    {path:"promotion",component:PromotionAdminComponent},
    {path:"promotion/add",component:PromotionAddComponent},
    {path:"promotion/edit/:id",component:PromotionEditComponent},
    {path:"user",component:UserAdminComponent},
    {path:"order",component:OrderComponent},
  ]},


  
  { path: '', component: LayoutClientComponent, children: [
    { path: '', component: HomeComponent },
    { path: ':category', component: ProductListComponent },
    { path: ':category/:id', component: DetailComponent },
  ]},

  { path: '**', component: NotFoundComponent },


 
  
   
];
// sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }