import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from 'src/app/models/cart/cart.module';
import { NFT } from 'src/app/models/nft/nft.module';
import { CartService } from 'src/app/services/cart.service';
import { ImageService } from 'src/app/services/image.service';
import { NftService } from 'src/app/services/nft.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-product-detail-area',
  templateUrl: './product-detail-area.component.html',
  styleUrls: ['./product-detail-area.component.scss']
})
export class ProductDetailAreaComponent implements OnInit {
  
  
  Carts: any;
  Cart: Cart = {
    quantity: 0,
    totalPrice: 0,
    collectionName: '',
    nftName: '',
    username: ''
  }
  selectedFile: any;
  imagePreviewUrl: any;

  images: any;
  retrieveResponse: any;
  base64Data: any;
  retrievedCollectionImage: any;
  retrievedNftImages: { [key: string]: any } = { "": "" };
  Nft :any;
  constructor(private userService: UserService,  private nftService: NftService, private cartService: CartService,  private imageService: ImageService, private router: Router, private route: ActivatedRoute) { 
   // this.shopGridData = shopItems.trendingsData();
  }


  ngOnInit(): void {
    this.route.params.subscribe(params => {        
      if (params['name']) {
        this.getNftByName(params['name']);
      }
  })
}
  getNftByName(name: any) {
    this.nftService.getNftByName(name).subscribe(response => {
      this.Nft = response;
      this.getNftImage(this.Nft);
      
    })

  }
  
  getNftImage(nft: any) {
    this.imageService.getImage(nft.imageName).subscribe(response => {
      this.retrieveResponse = response;
      this.base64Data = this.retrieveResponse.picByte;
      this.retrievedNftImages[nft.name] = 'data:image/jpeg;base64,' + this.base64Data;
    });
  }

  persistCart() {
    this.cartService.persistCart(this.Cart).subscribe(() => {
      //this.router.navigate(['cart', this.Cart.name]);
      this.resetCart();
    })
  }

  resetCart() {
    this.Cart = {
      quantity: 0,
      totalPrice: 0,
      collectionName: '',
      nftName: '',
      username: ''
    }
  }
}
