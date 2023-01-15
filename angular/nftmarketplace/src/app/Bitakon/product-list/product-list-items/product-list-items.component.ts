import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NFT } from 'src/app/models/nft/nft.module';
import { CartService } from 'src/app/services/cart.service';
import { ImageService } from 'src/app/services/image.service';
import { NftService } from 'src/app/services/nft.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-product-list-items',
  templateUrl: './product-list-items.component.html',
  styleUrls: ['./product-list-items.component.scss']
})
export class ProductListItemsComponent implements OnInit {

  products : any;
  
   Carts: any;
   nft:any;
   imagePreviewUrl: any;

   user:any;
hash1: any;
 
   
   retrieveResponse: any;
   base64Data: any;
   retrievedCollectionImage: any;
   retrievedNftImages: { [key: string]: any } = { "": "" };
   constructor(private userService: UserService,private cartService: CartService,  private imageService: ImageService, private nftService: NftService, private router: Router, private route: ActivatedRoute) {
   }
   
 
 
   ngOnInit(): void {
     this.imagePreviewUrl = null;
     this.cartService.getCarts().subscribe(reponse => {   
       this.Carts = reponse;
       //console.log(reponse);
       for (var cart of reponse) {
         this.getCartImage(cart); // prints values: 10, 20, 30, 40  
       }
     })

     this.userService.getUsers().subscribe(reponse => {
        
      this.hash1 = sessionStorage.getItem("hash");
      for (var user1 of reponse) {
        if(user1.hash == this.hash1){
          this.user=user1;
        } 
      } 
    })

     
   }
 
   getCartImage(cart: any) {
    
    this.nftService.getNftByName(cart.nftName).subscribe(response => {
      this.nft = response;
      this.imageService.getImage(response.imageName).subscribe(response1 => {
        this.retrieveResponse = response1;
        this.base64Data = this.retrieveResponse.picByte;
        this.retrievedNftImages[cart.nftName] = 'data:image/jpeg;base64,' + this.base64Data;
      });
    });
   }

   delete(id:any){
    
    
      this.cartService.deleteCart(id).subscribe
      (res=>{
        this.imagePreviewUrl = null;
        this.Carts=null;
     this.cartService.getCarts().subscribe(reponse => {   
       this.Carts = reponse;
       //console.log(reponse);
       for (var cart of reponse) {
         this.getCartImage(cart); // prints values: 10, 20, 30, 40
       }
     })
      })
    
   }
 
   // Redirect to an external URL
   goTo(url: any) {
     window.location.href = url;
   }
 

}
