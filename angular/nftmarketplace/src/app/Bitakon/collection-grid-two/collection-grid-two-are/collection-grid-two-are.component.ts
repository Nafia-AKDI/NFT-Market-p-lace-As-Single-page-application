import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollectionService } from 'src/app/services/collection.service';
import { ImageService } from 'src/app/services/image.service';
import { NftService } from 'src/app/services/nft.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-collection-grid-two-are',
  templateUrl: './collection-grid-two-are.component.html',
  styleUrls: ['./collection-grid-two-are.component.scss']
})
export class CollectionGridTwoAreComponent implements OnInit {

  collectionData = [
    {
      id:1,
      collection__box_tag:'Crypton',
      smImg:'assets/img/collection/3/sm/collection-sm-1.jpg',
      bigImg:'assets/img/collection/3/collection-1.jpg',
      collection__box_title:'Generative Art',
      nft:'12.56 NFTs',
      collection__box_user_img:'assets/img/collection/3/user/user-1.jpg',
      collection__box_user_name:'@Crypto Krazie'
    },
    {
      id:2,
      collection__box_tag:'MonoArt',
      smImg:'assets/img/collection/3/sm/collection-sm-2.jpg',
      bigImg:'assets/img/collection/3/collection-2.jpg',
      collection__box_title:'Mono Art',
      nft:'21.14 NFTs',
      collection__box_user_img:'assets/img/collection/3/user/user-2.jpg',
      collection__box_user_name:'@Mono Art'
    },
    {
      id:3,
      collection__box_tag:'Dreams',
      smImg:'assets/img/collection/3/sm/collection-sm-3.jpg',
      bigImg:'assets/img/collection/3/collection-3.jpg',
      collection__box_title:'Paper Dreams',
      nft:'12.56 NFTs',
      collection__box_user_img:'assets/img/collection/3/user/user-3.jpg',
      collection__box_user_name:'@Mono Art'
    },
    {
      id:4,
      collection__box_tag:'Travel',
      smImg:'assets/img/collection/3/sm/collection-sm-4.jpg',
      bigImg:'assets/img/collection/3/collection-4.jpg',
      collection__box_title:'Travel <br> Without Moving',
      nft:'12.56 NFTs',
      collection__box_user_img:'assets/img/collection/3/user/user-4.jpg',
      collection__box_user_name:'@galinadeinega'
    },
    {
      id:5,
      collection__box_tag:'Dinf',
      smImg:'assets/img/collection/3/sm/collection-sm-5.jpg',
      bigImg:'assets/img/collection/3/collection-5.jpg',
      collection__box_title:"Dante's Inferno",
      nft:'12.56 NFTs',
      collection__box_user_img:'assets/img/collection/3/user/user-5.jpg',
      collection__box_user_name:'@Crypto Krazie'
    },
    {
      id:6,
      collection__box_tag:'Streets',
      smImg:'assets/img/collection/3/sm/collection-sm-6.jpg',
      bigImg:'assets/img/collection/3/collection-6.jpg',
      collection__box_title:"The Ineffabl",
      nft:'10.06 NFTs',
      collection__box_user_img:'assets/img/collection/3/user/user-6.jpg',
      collection__box_user_name:'@Crypto Krazie'
    }
  ]

  collection: any;
  collections: any;
  nfts: any;
  images: any;

  users:any;


  retrieveResponse: any;
  base64Data: any;
  retrievedCollectionImage: any;
  retrievedNftImages: { [key: string]: any } = { "": "" };


  constructor(private userService: UserService, private collectionService: CollectionService, private nftService: NftService, private imageService: ImageService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['name']) {
        this.getCollectionByName(params['name']);
      }
    })
    this.collectionService.getCollections().subscribe(reponse => {
      this.collections = reponse;
      for (var col of reponse) {
        this.getCollectionImage(col); // prints values: 10, 20, 30, 40
        
      }
    })
   
    this.userService.getUsers().subscribe(reponse => {
      this.users=reponse
      //this.hash1 = sessionStorage.getItem("hash");
      for (var user1 of reponse) {
        //if(user1.hash == this.has){
         // this.user=user1;
          this.getUserImage(user1); // prints values: 10, 20, 30, 40
       // } 
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

  getCollectionByName(name: any) {
    this.collectionService.getCollectionByName(name).subscribe(reponse => {
      this.collection = reponse;
      this.getCollectionImage(this.collection.imageName);
      this.getNftsByCollectionName(this.collection.name);
    })
  }

  getCollectionImage(collection: any) {
    this.imageService.getImage(collection.imageName).subscribe(response => {
      this.retrieveResponse = response;
      this.base64Data = this.retrieveResponse.picByte;
      this.retrievedNftImages[collection.name] = 'data:image/jpeg;base64,' + this.base64Data;
      
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

  
  // Redirect to an external URL
  goTo(url: any) {
    window.location.href = url;
  }

}
