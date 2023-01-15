import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollectionService } from 'src/app/services/collection.service';
import { ImageService } from 'src/app/services/image.service';
import { NftService } from 'src/app/services/nft.service';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.scss']
})
export class HomeMainComponent implements OnInit {

  nfts: any;

  retrieveResponse: any;
  base64Data: any;
  retrievedCollectionImage: any;
  retrievedNftImages: { [key: string]: any } = { "": "" };
  constructor(private collectionService: CollectionService, private nftService: NftService, private imageService: ImageService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getNftsByCollectionName(1)
    //console.log(this.retrievedNftImages[nft.name])
  }
  getNftsByCollectionName(collectionName: any) {
    this.nftService.getNftsByCollectionName(collectionName).subscribe(reponse => {
      this.nfts = reponse;
      for (let nft of this.nfts) {
        this.getNftImage(nft);
        console.log(this.retrievedNftImages);
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
