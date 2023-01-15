import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NFT } from 'src/app/models/nft/nft.module';
import { User } from 'src/app/models/user/user.module';
import { ImageService } from 'src/app/services/image.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-register-area',
  templateUrl: './register-area.component.html',
  styleUrls: ['./register-area.component.scss']
})
export class RegisterAreaComponent implements OnInit {

  @Input() multiple: string | undefined;
  users: any;
  hash1: any;

  user: User = {
    username: '',
    email: '',
    password: '',
    profilPicture: '',
    hash: ''
  }

  selectedFile: any;
  imagePreviewUrl: any;

  // Icons
  //faCloudArrowUp = faCloudArrowUp;

  constructor(private userService: UserService, private imageService: ImageService, private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
    
  }

  getUsers() {
    this.userService.getUsers().subscribe(reponse => {
      this.users = reponse;
      console.log(reponse);
    })
  }

  persistUser() {
    this.hash1 = sessionStorage.getItem("hash");
    this.user.hash = this.hash1;
    
    this.userService.persistUser(this.user).subscribe(() => {
      console.log(this.user)
      this.onUpload();
      this.resetUser();
      
    })
  }

  resetUser() {
    this.user = {
      username: '',
      email: '',
      password: '',
      profilPicture: '',
      hash: ''
    }
  }

  onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
    this.readImage(this.selectedFile);
    this.user.profilPicture = this.selectedFile.name;

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
