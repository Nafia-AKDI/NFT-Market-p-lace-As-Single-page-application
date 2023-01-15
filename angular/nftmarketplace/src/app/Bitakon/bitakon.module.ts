import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import { SwiperModule } from 'swiper/angular';
import { MetismenuAngularModule } from "@metismenu/angular";
import { ClipboardModule } from 'ngx-clipboard';


import { HeaderComponent } from './Common/header/header.component';
import { HomeHeroSliderComponent } from './Home/home-hero-slider/home-hero-slider.component';
import { PopularSellersComponent } from './Home/popular-sellers/popular-sellers.component';
import { BidsAreaComponent } from './Home/bids-area/bids-area.component';
import { CollectionAreaComponent } from './Home/collection-area/collection-area.component';
import { FeaturesAreaComponent } from './Home/features-area/features-area.component';
import { CtaAreaComponent } from './Home/cta-area/cta-area.component';
import { FooterComponent } from './Home/footer/footer.component';
import { HomeMainComponent } from './Home/home-main/home-main.component';
import { HomeTwoMainComponent } from './home-two/home-two-main/home-two-main.component';
import { HeaderTwoComponent } from './home-two/header-two/header-two.component';
import { HomeTwoHeroComponent } from './home-two/home-two-hero/home-two-hero.component';
import { CollectionAreaTwoComponent } from './home-two/collection-area-two/collection-area-two.component';
import { ProductsTwoComponent } from './home-two/products-two/products-two.component';
import { CtaTwoComponent } from './home-two/cta-two/cta-two.component';
import { AuctionAreaTwoComponent } from './home-two/auction-area-two/auction-area-two.component';
import { BrandAreaTwoComponent } from './home-two/brand-area-two/brand-area-two.component';
import { BlogAreaTwoComponent } from './home-two/blog-area-two/blog-area-two.component';
import { MarqueTextAreaComponent } from './Common/marque-text-area/marque-text-area.component';

import { BreadcrumbComponent } from './Common/breadcrumb/breadcrumb.component';
import { CommonFooterComponent } from './Common/common-footer/common-footer.component';
import { ProductDetailsMainComponent } from './product-details/product-details-main/product-details-main.component';
import { ProductDetailsRightSideComponent } from './Common/product-details-right-side/product-details-right-side.component';
import { ProductDetailAreaComponent } from './product-details/product-detail-area/product-detail-area.component';
import { ProductFiterMainComponent } from './product-filter/product-fiter-main/product-fiter-main.component';
import { ProductListMainComponent } from './product-list/product-list-main/product-list-main.component';
import { ProductListItemsComponent } from './product-list/product-list-items/product-list-items.component';
import { FooterTwoComponent } from './Common/footer-two/footer-two.component';
import { RegisterMainComponent } from './register/register-main/register-main.component';
import { RegisterAreaComponent } from './register/register-area/register-area.component';
import { BlogRightSideComponent } from './Common/blog-right-side/blog-right-side.component';
import { PaginationComponent } from './Common/pagination/pagination.component';
import { CollectionGridTwoMainComponent } from './collection-grid-two/collection-grid-two-main/collection-grid-two-main.component';
import { CollectionGridTwoAreComponent } from './collection-grid-two/collection-grid-two-are/collection-grid-two-are.component';
import { CreateSingleMainComponent } from './create-single/create-single-main/create-single-main.component';
import { CreateSingleAreaComponent } from './create-single/create-single-area/create-single-area.component';
import { ProfileMainComponent } from './profile/profile-main/profile-main.component';
import { ProfileAreaComponent } from './profile/profile-area/profile-area.component';
import { CreateCollectionComponent } from './create-collection/create-collection.component';



@NgModule({
  imports: [
    CommonModule,
    SwiperModule,
    MatSelectModule,
    MatSliderModule,
    RouterModule,
    NgxSliderModule,
    FormsModule,
    MetismenuAngularModule,
    ClipboardModule
  ],
  declarations: [
    HomeMainComponent,
    HeaderComponent,
    HomeHeroSliderComponent,
    PopularSellersComponent,
    BidsAreaComponent,
    CollectionAreaComponent,
    FeaturesAreaComponent,
    CtaAreaComponent,
    FooterComponent,
    HomeTwoMainComponent,
    HeaderTwoComponent,
    HomeTwoHeroComponent,
    CollectionAreaTwoComponent,
    ProductsTwoComponent,
    CtaTwoComponent,
    AuctionAreaTwoComponent,
    BrandAreaTwoComponent,
    BlogAreaTwoComponent,
    MarqueTextAreaComponent,
    BreadcrumbComponent,
    CommonFooterComponent,
    ProductDetailsMainComponent,
    ProductDetailsRightSideComponent,
    ProductDetailAreaComponent,
    ProductFiterMainComponent,
    ProductListMainComponent,
    ProductListItemsComponent,
    FooterTwoComponent,
    RegisterMainComponent,
    RegisterAreaComponent,
    BlogRightSideComponent,
    PaginationComponent,
     CollectionGridTwoMainComponent,
    CollectionGridTwoAreComponent,
    CreateSingleMainComponent,
    CreateSingleAreaComponent,
    ProfileMainComponent,
    ProfileAreaComponent,
    CreateCollectionComponent,
  ],
  exports: [
    NgxSliderModule,
  ],

})
export class BitakonModule { }
