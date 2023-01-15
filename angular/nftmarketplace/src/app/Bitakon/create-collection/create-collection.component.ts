import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Collection } from 'src/app/models/collection/collection.module';
import { Image } from 'src/app/models/image/image.module';
import { CategoryService } from 'src/app/services/category.service';
import { CollectionService } from 'src/app/services/collection.service';
import { ImageService } from 'src/app/services/image.service';
import { NftService } from 'src/app/services/nft.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-collection',
  templateUrl: './create-collection.component.html',
  styleUrls: ['./create-collection.component.scss']
})
export class CreateCollectionComponent implements OnInit {
  categories: any;
 

  Collection: Collection = {
    name: '',
    description: '',
    items: 0,
    website: '',
    discord: '',
    twitter: '',
    createdAt: new Date(),
    categoryName: '',
    username: '',
    imageName: ''
  }

  Image: Image = {
    name: '',
    type: '',
    picByte: ''
  }

  selectedFile: any;
  imagePreviewUrl: any;

  user:any;
hash1: any;

  constructor(private categoryService: CategoryService, private collectionService: CollectionService, private imageService: ImageService,private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getCategories();
    this.imagePreviewUrl = null;

    this.userService.getUsers().subscribe(reponse => {
        
      this.hash1 = sessionStorage.getItem("hash");
      for (var user1 of reponse) {
        if(user1.hash == this.hash1){
          this.user=user1;
        } 
      } 
    })
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(response => {
      this.categories = response;
    })
  }

  persistCollection() {
    this.Collection.username= this.user.username;
    console.log(this.Collection.username)
    this.collectionService.persistCollection(this.Collection).subscribe(() => {
      this.onUpload();
      this.router.navigate(['collection', this.Collection.name]);
      this.resetCollection();
    })
  }

  resetCollection() {
    this.Collection = {
      name: '',
      description: '',
      items: 0,
      website: '',
      discord: '',
      twitter: '',
      createdAt: new Date(),
      categoryName: '',
      username: '',
      imageName: ''
    }
  }

  onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
    this.readImage(this.selectedFile);
    this.Collection.imageName = this.selectedFile.name;
  }

  readImage(selectedImage: any) {
    if (selectedImage) {
      var reader = new FileReader();
      reader.readAsDataURL(selectedImage);
      reader.onloadend = (event) => {
        if (event.target)
          this.imagePreviewUrl = event.target.result;
      };
    }
  }

  onUpload() {
    const uploadImageData = new FormData();
    uploadImageData.append("imageFile", this.selectedFile, this.selectedFile.name);

    console.log(uploadImageData.get("imageFile"));
    this.imageService.uploadImage(uploadImageData);
  }
}
