import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductListingComponent } from './components/product-listing/product-listing.component';
import { LoginComponent } from './components/login/login.component';
import { ProductFormComponent } from './components/product-listing/product-form/product-form.component';
import { ProductDetailsComponent } from './components/product-listing/product-details/product-details.component';

export const routes: Routes = [
    {path:'' , component:HomeComponent},
    {path:'products-listing' , component:ProductListingComponent},
    {path:'login' , component:LoginComponent},
    {path:'products/:id/edit' , component:ProductFormComponent},
    {path:'products/:id' , component:ProductDetailsComponent},
];
