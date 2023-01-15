import { Component, OnInit } from '@angular/core';
import SwiperCore, {Navigation } from "swiper";
import { ActivatedRoute, Router } from '@angular/router';
import { NFT } from 'src/app/models/nft/nft.module';
import { CollectionService } from 'src/app/services/collection.service';
import { ImageService } from 'src/app/services/image.service';
import { NftService } from 'src/app/services/nft.service';


SwiperCore.use([Navigation]);

@Component({
  selector: 'app-bids-area',
  templateUrl: './bids-area.component.html',
  styleUrls: ['./bids-area.component.scss']
})
export class BidsAreaComponent implements OnInit {

  bids : any;

  collections: any;
  collection: any;
  nfts: any;
  NftsHotBids :NFT[]=[];
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

  constructor(private route: ActivatedRoute, private router: Router, private collectionService: CollectionService, private nftService: NftService, private imageService: ImageService) {
  }

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
      this.HotBids(reponse);
    })  
   }

  HotBids(nfts: any){
   this.nbr3=this.nbr1;
    this.nbr2=this.nbr1-4;
      this.nbr1=0;
      
     for (var nft5 of nfts) { 
       this.nbr1++;
       if(this.nbr1>this.nbr2 ){
       this.NftsHotBids.push(nft5);
       }
       }
       console.log("hello");
       console.log(this.NftsHotBids);
     
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
