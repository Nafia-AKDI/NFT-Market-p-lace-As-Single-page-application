import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollectionService } from 'src/app/services/collection.service';
import { ImageService } from 'src/app/services/image.service';
import { NftService } from 'src/app/services/nft.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-profile-area',
  templateUrl: './profile-area.component.html',
  styleUrls: ['./profile-area.component.scss']
})
export class ProfileAreaComponent implements OnInit {

  onSalesItems : any;
  createdItems  : any;
  collections1 : any;
  likesData : any;

  collection: any;
   collections: any;
   nfts: any;
   nft1: any;
   nft2: any;
   images: any;
   nbr1 = 0;
   nbr2=0;
   users: any;
   user:any;
  hash1: any;
 
   retrieveResponse: any;
   base64Data: any;
   retrievedCollectionImage: any;
   retrievedNftImages: { [key: string]: any } = { "": "" };
   retrievedCollectionImages: { [key: string]: any } = { "": "" };

  constructor( private collectionService: CollectionService, private nftService: NftService, private imageService: ImageService, private userService: UserService, private route: ActivatedRoute) {
    
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
    })
    this.userService.getUsers().subscribe(reponse => {
      this.users = reponse;
      this.hash1 = sessionStorage.getItem("hash");
      for (var user1 of reponse) {
        if(user1.hash == this.hash1){
          this.user=user1;
          this.getUserImage(user1); // prints values: 10, 20, 30, 40
        } 
      } 
    })
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

   getUserImage(user1: any) {
    this.imageService.getImage(user1.profilPicture).subscribe(response => {
   
      this.retrieveResponse = response;
      this.base64Data = this.retrieveResponse.picByte;
      this.retrievedNftImages[user1.username] = 'data:image/jpeg;base64,' + this.base64Data;
      //console.log(user1.username)
    });
  }
 
   
   // Redirect to an external URL
   goTo(url: any) {
     window.location.href = url;
   }

}
