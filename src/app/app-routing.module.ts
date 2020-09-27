import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './_services/auth-guard.service';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { LogoutComponent } from './logout/logout.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  { path: "home", component: WelcomeComponent},
  { path: "login", component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'dashboard', component: HomeComponent, canActivate: [AuthGuardService], children: [
    {path: '', component: ProductListComponent},
    { path: 'product-list', component: ProductsComponent },
    {path: 'add-products', component: AddProductComponent}
  ]},
  { path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
