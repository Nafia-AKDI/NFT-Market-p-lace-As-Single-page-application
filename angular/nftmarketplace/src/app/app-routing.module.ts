import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeMainComponent } from './Bitakon/Home/home-main/home-main.component';
import { HomeTwoMainComponent } from './Bitakon/home-two/home-two-main/home-two-main.component';
import { ProductDetailsMainComponent } from './Bitakon/product-details/product-details-main/product-details-main.component';
import { ProductFiterMainComponent } from './Bitakon/product-filter/product-fiter-main/product-fiter-main.component';
import { ProductListMainComponent } from './Bitakon/product-list/product-list-main/product-list-main.component';
import { RegisterMainComponent } from './Bitakon/register/register-main/register-main.component';

import { CollectionGridTwoMainComponent } from './Bitakon/collection-grid-two/collection-grid-two-main/collection-grid-two-main.component';

import { CreateSingleMainComponent } from './Bitakon/create-single/create-single-main/create-single-main.component';
import { ProfileMainComponent } from './Bitakon/profile/profile-main/profile-main.component';
import { CreateCollectionComponent } from './Bitakon/create-collection/create-collection.component';



const routes: Routes = [
  { path: '', component: HomeMainComponent },
  { path: 'home-two', component: HomeTwoMainComponent },
  { path: 'product-details/:name', component: ProductDetailsMainComponent },
  { path: 'product-filter', component: ProductFiterMainComponent },
  { path: 'product-filter/:name', component: ProductFiterMainComponent },
  { path: 'product-list', component: ProductListMainComponent },
  { path: 'product-list', component: ProductListMainComponent },
  { path: 'register', component: RegisterMainComponent },
  { path: 'collection-grid-two', component: CollectionGridTwoMainComponent },
  { path: 'create-single', component: CreateSingleMainComponent },
  { path: 'profile', component: ProfileMainComponent },
  { path: 'create-collection', component: CreateCollectionComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
