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
import { LayoutAdminComponent } from './pages/layout-admin/layout-admin.component';

const routes: Routes = [
  { path: 'cart', component: CartComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  {path: "admin" , component:LayoutAdminComponent},
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