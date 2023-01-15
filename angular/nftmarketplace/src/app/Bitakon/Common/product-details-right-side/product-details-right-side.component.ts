import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from 'src/app/models/cart/cart.module';
import { CartService } from 'src/app/services/cart.service';
import { ImageService } from 'src/app/services/image.service';
import { NftService } from 'src/app/services/nft.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-product-details-right-side',
  templateUrl: './product-details-right-side.component.html',
  styleUrls: ['./product-details-right-side.component.scss']
})
export class ProductDetailsRightSideComponent implements OnInit {
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
  Nft : any;


  user:any;
  hash1: any;
  name: string='';
  
  constructor(private userService: UserService, private cdref: ChangeDetectorRef,  private nftService: NftService, private cartService: CartService,  private imageService: ImageService, private router: Router, private route: ActivatedRoute) {
    setInterval(() => {
      this.myTimer()
    }, 1000);
   }

  
 
   ngOnInit(): void {
     this.route.params.subscribe(params => {        
       if (params['name']) {
         this.getNftByName(params['name']);
       }
   })
   this.userService.getUsers().subscribe(reponse => {
    //this.users=reponse
    this.hash1 = sessionStorage.getItem("hash");
    for (var user1 of reponse) {
      if(user1.username == this.Nft.username){
       // this.user=user1;
        this.getUserImage(user1); // prints values: 10, 20, 30, 40
     // } 
    }
    if(user1.hash == this.hash1){
      this.user=user1;  
    } 
  }
  })
}
getUserImage(user1: any) {
  this.imageService.getImage(user1.profilPicture).subscribe(response => {
 
    this.retrieveResponse = response;
    this.base64Data = this.retrieveResponse.picByte;
    this.retrievedNftImages[user1.username] = 'data:image/jpeg;base64,' + this.base64Data;
    //console.log(user1.username)
  });
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
    

      
    this.Cart = {
      quantity: 1,
      totalPrice: this.Nft.price,
      collectionName: this.Nft.collectionName,
      nftName: this.Nft.name,
      username: this.user.username,
    };
     this.cartService.persistCart(this.Cart).subscribe(() => {
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

  currentDate: any;
  targetDate: any;
  cDateMillisecs: any;
  tDateMillisecs: any;
  difference: any;
  seconds: any;
  minutes: any;
  hours: any;
  days: any;
  year: number = 2023;
  month: number = 10;
  months = [
    'Jan',
    'Feb',
    'Mar',
    'April',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];
  day: number = 30;

  ngAfterContentChecked() {
    this.myTimer();
  }

  myTimer() {
    this.currentDate = new Date();
    this.targetDate = new Date(2023, 10, 30);
    this.cDateMillisecs = this.currentDate.getTime();
    this.tDateMillisecs = this.targetDate.getTime();
    this.difference = this.tDateMillisecs - this.cDateMillisecs;
    this.seconds = Math.floor(this.difference / 1000);
    this.minutes = Math.floor(this.seconds / 60);
    this.hours = Math.floor(this.minutes / 60);
    this.days = Math.floor(this.hours / 24);

    this.hours %= 24;
    this.minutes %= 60;
    this.seconds %= 60;
    this.hours = this.hours < 10 ? '0' + this.hours : this.hours;
    this.minutes = this.minutes < 10 ? '0' + this.minutes : this.minutes;
    this.seconds = this.seconds < 10 ? '0' + this.seconds : this.seconds;
  }

}
