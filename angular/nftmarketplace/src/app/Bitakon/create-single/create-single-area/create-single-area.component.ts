import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { NFT } from 'src/app/models/nft/nft.module';
import { CollectionService } from 'src/app/services/collection.service';
import { ImageService } from 'src/app/services/image.service';
import { NftService } from 'src/app/services/nft.service';
import { UserService } from 'src/app/services/user.service';
import abiInterface from '../../../../../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json'

@Component({
  selector: 'app-create-single-area',
  templateUrl: './create-single-area.component.html',
  styleUrls: ['./create-single-area.component.scss']
})
export class CreateSingleAreaComponent implements OnInit {

  @Input () multiple : string | undefined;
  collections: any;

  Nft: NFT = {
    name: '',
    price: 0,
    collectionName: '',
    imageName: '',
    username: ''
  }

  selectedFile: any;
  imagePreviewUrl: any;

  // Icons
  //faCloudArrowUp = faCloudArrowUp;

  constructor(private collectionService: CollectionService, private nftService: NftService, private imageService: ImageService,private userService: UserService, private router: Router) { }

  user:any;
hash1: any;

  ngOnInit(): void {
    this.getCollections();

    this.userService.getUsers().subscribe(reponse => {
        
      this.hash1 = sessionStorage.getItem("hash");
      for (var user1 of reponse) {
        if(user1.hash == this.hash1){
          this.user=user1;
        } 
      } 
    })
  }

  getCollections() {
    this.collectionService.getCollections().subscribe(reponse => {
      this.collections = reponse;
    })
  }

  async persistNft() {
    const ethers = require("ethers");
      const adress ="0x5FbDB2315678afecb367f032d93F642f64180aa3";
     const provider= await  new ethers.providers.Web3Provider(window.ethereum)
      const signer= provider.getSigner()
     const mycontract = new ethers.Contract(adress,abiInterface.abi, signer)
       const v2 = await mycontract.addItem(await signer.getAddress())
       await v2.wait()
    this.Nft.username= this.user.username;
   
    this.nftService.persistNft(this.Nft).subscribe(() => {
      this.onUpload();
      this.router.navigate(['item', this.Nft.name]);
      this.resetNft();
    })
  }

  resetNft() {
    this.Nft = {
      name: '',
      price: 0,
      collectionName: '',
      imageName: '',
      username:''
    }
  }

  onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
    this.readImage(this.selectedFile);
    this.Nft.imageName = this.selectedFile.name;
   
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
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);

    this.imageService.uploadImage(uploadImageData);
  }


}
