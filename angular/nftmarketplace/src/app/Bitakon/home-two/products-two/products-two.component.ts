import { Component, OnInit,Input } from '@angular/core';
import { Options } from "@angular-slider/ngx-slider";
import { ActivatedRoute, Router } from '@angular/router';
import { CollectionService } from 'src/app/services/collection.service';
import { NftService } from 'src/app/services/nft.service';
import { ImageService } from 'src/app/services/image.service';
import { NFT } from 'src/app/models/nft/nft.module';


@Component({
  selector: 'app-products-two',
  templateUrl: './products-two.component.html',
  styleUrls: ['./products-two.component.scss']
})
export class ProductsTwoComponent implements OnInit {

  @Input () product : string | undefined;
  @Input () product_grid : string | undefined;

  minValue: number = 0.00;
  maxValue: number = 10.00;
  options: Options = {
    floor: 0.00,
    ceil: 10.00,
    hidePointerLabels:false
  };

  products : any;

  collections: any;
  collection: any;
  nfts: any;

  retrieveResponse: any;
  base64Data: any;
  retrievedCollectionImage: any;
  retrievedNftImages: { [key: string]: any } = { "": "" };


  constructor( private route: ActivatedRoute, private router: Router, private collectionService: CollectionService, private nftService: NftService, private imageService: ImageService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {        
      if (params['name']) {
        this.getNftsByCollectionName(params['name']);
        
      }
    })
    
  }

  getCollectionByName(name: any) {
    this.collectionService.getCollectionByName(name).subscribe(reponse => {
      this.collection = reponse;
      this.getCollectionImage(this.collection.imageName);
      this.getNftsByCollectionName(this.collection.name);
    })
  }

  getCollectionImage(imageName: any) {
    this.imageService.getImage(imageName).subscribe(response => {
      this.retrieveResponse = response;
      this.base64Data = this.retrieveResponse.picByte;
      this.retrievedCollectionImage = 'data:image/jpeg;base64,' + this.base64Data;
    });
  }

  getNftsByCollectionName(collectionName: any) {
    this.nftService.getNftsByCollectionName(collectionName).subscribe(reponse => {
      this.nfts = reponse;
      for (let nft of this.nfts) {
        this.getNftImage(nft);
        
      }
    })
  }

  getNftImage(nft: any) {
    this.imageService.getImage(nft.imageName).subscribe(response => {
      this.retrieveResponse = response;
      this.base64Data = this.retrieveResponse.picByte;
      this.retrievedNftImages[nft.name] = 'data:image/jpeg;base64,' + this.base64Data;
    });
  }


}
