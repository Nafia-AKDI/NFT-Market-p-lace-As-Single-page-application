import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Collection } from 'src/app/models/collection/collection.module';
import { CollectionService } from 'src/app/services/collection.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-collection-area',
  templateUrl: './collection-area.component.html',
  styleUrls: ['./collection-area.component.scss']
})
export class CollectionAreaComponent implements OnInit {

  collectionData : any;

  bids : any;

  collections: any;

  HotCollection :Collection[]=[];
  images: any;
  nbr1 = 0;
  nbr2=0;
  nbr3=0;
  
  retrieveResponse: any;
  base64Data: any;
  retrievedCollectionImage: any;
  retrievedCollectionImages: { [key: string]: any } = { "": "" };
  nbr4=0;

  constructor( private router: Router, private collectionService: CollectionService, private imageService: ImageService) {
   }

  ngOnInit(): void {
    this.collectionService.getCollections().subscribe(reponse => {
      this.collections = reponse;
      for (var col of reponse) { 
        this.getCollectionImage(col); // prints values: 10, 20, 30, 40
        this.nbr1++;
      }
      this.HotCollections(reponse);
    })  
  }

  HotCollections(collections: any){
    this.nbr3=this.nbr1;
     this.nbr2=this.nbr1-3;
       this.nbr1=0;
       
      for (var col5 of collections) { 
        this.nbr1++;
        if(this.nbr1>this.nbr2 ){
        this.HotCollection.push(col5);
        }
        }
        console.log("hello");
        console.log(this.HotCollection);
      
   }
  
  
    
  
    getCollectionImage(collection: any) {
      this.imageService.getImage(collection.imageName).subscribe(response => {
        this.retrieveResponse = response;
        this.base64Data = this.retrieveResponse.picByte;
        this.retrievedCollectionImages[collection.name] = 'data:image/jpeg;base64,' + this.base64Data;
        
      });
    }
  

}
