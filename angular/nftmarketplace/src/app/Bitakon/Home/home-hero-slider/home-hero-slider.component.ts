import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NFT } from 'src/app/models/nft/nft.module';
import { CollectionService } from 'src/app/services/collection.service';
import { ImageService } from 'src/app/services/image.service';
import { NftService } from 'src/app/services/nft.service';
import SwiperCore, { Autoplay,Navigation } from "swiper";

SwiperCore.use([Autoplay,Navigation]);

@Component({
  selector: 'app-home-hero-slider',
  templateUrl: './home-hero-slider.component.html',
  styleUrls: ['./home-hero-slider.component.scss']
})
export class HomeHeroSliderComponent implements OnInit {

  sliderData = [
    {
      id:1,
      bigImg:'assets/img/slider/slider-big-1.jpg',
    },
    {
      id:2,
      bigImg:'assets/img/slider/slider-big-2.jpg',
    },
  ]

  

  collections: any;
  collection: any;
  nfts: any;
  nftsHome:NFT[]=[];
  nft1: any;
  nft2: any;
  images: any;
  nbr1 = 0;
  nbr2=0;
  nbr3=0;
  nftData:any;
  retrieveResponse: any;
  base64Data: any;
  retrievedCollectionImage: any;
  retrievedNftImages: { [key: string]: any } = { "": "" };
  retrievedCollectionImages: { [key: string]: any } = { "": "" };
  homeNfts: { [key: string]: any } = { "": "" };
  data: NFT = <NFT>{};
  nbr4=0;
  
  constructor(private route: ActivatedRoute, private router: Router, private collectionService: CollectionService, private nftService: NftService, private imageService: ImageService) { }

  ngOnInit(): void {
    this.collectionService.getCollections().subscribe(reponse => {
      this.collections = reponse;
      for (var col of reponse) {
        this.getCollectionImage(col); // prints values: 10, 20, 30, 40
      }
    })  

    this.nftService.getNfts().subscribe(reponse => {
     this.nfts = reponse;
     for (var nft of reponse) { 
       this.getNftImage(nft); // prints values: 10, 20, 30, 40
       this.nbr1++;
     }
     this.HomeNfts(reponse);
   }) 
   
   
  }


 HomeNfts(nfts: any){
  this.nbr3=this.nbr1;
   this.nbr2=this.nbr1-8;
     this.nbr1=0;
     for (var nft of nfts) {
      this.nbr1++;
       if(this.nbr1>this.nbr2 && this.nbr3>this.nbr1){
         this.nft1=nft;
         console.log(this.nft1);
       }
       if(this.nbr1>this.nbr2 && this.nbr3==this.nbr1){
         this.nft2=nft;     
         console.log(this.nft2);
       }     
     }
     this.nbr1=0;
  
     this.nftData = [
      {
        id:1,
        nftName:this.nft1.name,
      },
      {
        id:2,
        nftName: this.nft2.name,
      },
    ]
    for (var nft5 of nfts) { 
      this.nbr1++;
      if(this.nbr1>this.nbr2 && this.nbr3-1>this.nbr1){
      this.nftsHome.push(nft5);
      }
      }
    
 }


  

  getCollectionImage(collection: any) {
    this.imageService.getImage(collection.imageName).subscribe(response => {
      this.retrieveResponse = response;
      this.base64Data = this.retrieveResponse.picByte;
      this.retrievedCollectionImages[collection.name] = 'data:image/jpeg;base64,' + this.base64Data;
      
    });
  }

  getNftImage(nft: any) {
    this.imageService.getImage(nft.imageName).subscribe(response => {
   
      this.retrieveResponse = response;
      this.base64Data = this.retrieveResponse.picByte;
      this.retrievedNftImages[nft.name] = 'data:image/jpeg;base64,' + this.base64Data;
      
    });
  }

  
  // Redirect to an external URL
  goTo(url: any) {
    window.location.href = url;
  }

}
