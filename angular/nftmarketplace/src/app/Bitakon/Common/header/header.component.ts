import { Component,HostListener, OnInit,Input } from '@angular/core';
import { ethers } from "ethers" 

import abiInterface from '../../../../../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json'
import { sign } from 'crypto';
import { ImageService } from 'src/app/services/image.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input () header__transparent : string | undefined;

  headerSticky : boolean = false;
  isConnect :boolean =false ;
  
   nfts:any=[];
   showSidebar : boolean = false;

  // sticky nav
  @HostListener('window:scroll',['$event']) onscroll () {
    if(window.scrollY > 80){
      this.headerSticky = true
    }
    else{
      this.headerSticky = false
    }
  }

  // handleSidebar
  handleSidebar () {
    this.showSidebar = true;
  }
  handleSidebarClose () {
    this.showSidebar = false;
  }
  savedata(){
    sessionStorage.setItem("isConnect", "True")
  }
  getdata(){
    return sessionStorage.getItem("isConnect")

  }
async connectToMetamask(){
  
//pour ouvrir metamask
    // d'abord il faut tester si le navigateur a deja le meta mask telecharger
    if (typeof window.ethereum !== 'undefined') {
      const pro = await window.ethereum.request({ method: "eth_requestAccounts" });
      console.log( pro[0]);
      //this.savedata()
      sessionStorage.setItem("hash", pro[0])
      this.isConnect=true
      //this.createSale();

    } else {
      alert("please install metamask wallet")
      this.getAllNFTs() ;
      console.log(this.nfts);
  } 
  sessionStorage.getItem("hash");
  
}
 async createSale(){
 /* const web3Modal = new web3Modal()
  const connection = await web3Modal.connect() 
  const provider = new ethers.providers.Web3Provider(connection)
  const signer = provider.getSigner() 
*/
 // const ethPrice = ethers.utils.parseUnits(formInput.price, "ether");
 const ethers = require("ethers");
 //After adding your Hardhat network to your metamask, this code will get providers and signers
//  const provider = new ethers.providers.Web3Provider(window.ethereum);
//  const adress ="0x8a6835B964854410c311b5B0ad2C94F208b0D36D";
 
//   const signer = provider.getSigner();
//   const price=1000;
//   const url="https://goerli.infura.io/v3/3eea2d71f7e94a4585546e822ce9c7f2";
//   let contract = new ethers.Contract(adress, abiInterface.abi, signer)
//   let transaction = await contract.createToken(url, price)
//   await transaction.wait() 
  //-----------------------------------
  const endPoint = "https://goerli.infura.io/v3/3eea2d71f7e94a4585546e822ce9c7f2";
  // connect to the etherum using unfura
  const adress ="0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9";

  //const provider = new ethers.providers.JsonRpcProvider();
  //const marketContract = new ethers.Contract(adress,abiInterface.abi, provider2)
  //let idnft = await marketContract.getCurrentToken()

   // const ad= await signer.getAddress()
    //console.log(ad);
   const provider= await  new ethers.providers.Web3Provider(window.ethereum)
   //await provider.send("eth_requestAccounts",[])
   //const balance = await provider.getBalance(adress);
   // console.log(balance)
   const signer= provider.getSigner()
   //console.log(await signer.getAddress())
   //console.log( signer.isSigner())
//console.log(signer.getChainId())
  const mycontract = new ethers.Contract(adress,abiInterface.abi, signer)
  const url="https://goerli.infura.io/v3/3eea2d71f7e94a4585546e822ce9c7f2";
  const price =1000
  //console.log(await provider.getBlockWithTransactions( 1) )
  //  let transaction = await mycontract.createToken(url, price)
  //  await transaction.wait() 
  //0x21e00d17f5002a26edccc039efa7b9eaea6b8a0c4d6fa473ddf29b648c010e52
  //  const vv = await mycontract.createToken(url,price)
  //  await vv.wait() 
  //  console.log(vv);
  //  const v2 = await mycontract.addItem(await signer.getAddress())
  //  await v2.wait() 
  // console.log(v2)
  //const v4 = await mycontract.getId()
  //  console.log(v4.hash);
  //  const v = await mycontract.getId()
  //    console.log(v._hex);

  //   const v3 = await mycontract.getItems()
  //   console.log(v3);
      //console.log(v.toString())
 /*  const url="axraf";
 // let contract = new ethers.Contract(adress, abiInterface.abi, signer)
 let price =100
  let transaction = await mycontract.createToken(url, price)
  await transaction.wait() 
// if it comes here, then it's not a contract.
  //console.log(idnft);*/
//console.log(this.getdata())
// this.savedata()
//sessionStorage.removeItem('isConnect')
}
 async getAllNFTs() {
     const ethers = require("ethers");
    //After adding your Hardhat network to your metamask, this code will get providers and signers
    const provider = new ethers.providers.Web3Provider(window.ethereum);
     const signer = provider.getSigner();
     //Pull the deployed contract instance
     const address = "0x5FbDB2315678afecb367f032d93F642f64180aa3"
     let contract = new ethers.Contract(address, abiInterface.abi, signer)
     //create an NFT Token
    let transaction = await contract.getListPrice();

     //Fetch all the details of every NFT from the contract and display
     const items = await Promise.all(transaction.map(async (i: { tokenId: { toNumber: () => any; }; price: { toString: () => any; }; seller: any; owner: any; }) => {
       const tokenURI = await contract.tokenURI(i.tokenId);
      // let meta = await axios.get(tokenURI);
       //meta = meta.data;

       let price = ethers.utils.formatUnits(i.price.toString(), 'ether');
       let item = {
         price,
         tokenId: i.tokenId.toNumber(),
         seller: i.seller,
         owner: i.owner,
        // image: meta.image,
         //name: meta.name,
         //description: meta.description,
       }
      this.nfts =item;
     }))

  
   
}
async  loadNFTs() {

    const endPoint = "https://goerli.infura.io/v3/3eea2d71f7e94a4585546e822ce9c7f2";
    // connect to the etherum using unfura
    const adress ="0x5FbDB2315678afecb367f032d93F642f64180aa3";

    const provider = new ethers.providers.JsonRpcProvider(endPoint)
    const marketContract = new ethers.Contract(adress,abiInterface.abi, provider)
    const data = await marketContract['getAllNFTs']();

    console.log(data);
    const items = await Promise.all(data.map(async (i: { tokenId: { toNumber: () => any; }; price: { toString: () => ethers.BigNumberish; }; seller: any; owner: any; }) => {
        const tokenUri = await marketContract['tokenURI'](i.tokenId)

        //const meta = await axios.get(tokenUri)
        let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
        let item = {
            price,
            tokenId: i.tokenId.toNumber(),
            seller: i.seller,
            owner: i.owner,
          /*  image: meta.data.image,
            name: meta.data.name,
            description: meta.data.description,
            category: meta.data.category*/
        }
        return item 
    }))
    this.nfts=items
    //setLoadingState('Done')
}
deconnectToMetamask(){
  sessionStorage.removeItem('hash')
  
}
user:any;
hash1: any;
 
retrieveResponse: any;
base64Data: any;
retrievedCollectionImage: any;
retrievedNftImages: { [key: string]: any } = { "": "" };
retrievedCollectionImages: { [key: string]: any } = { "": "" };
  constructor(private imageService: ImageService, private userService: UserService) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("hash")){
      this.isConnect=true; 
      this.userService.getUsers().subscribe(reponse => {
        
        this.hash1 = sessionStorage.getItem("hash");
        for (var user1 of reponse) {
          if(user1.hash == this.hash1){
            this.user=user1;
            this.getUserImage(user1); // prints values: 10, 20, 30, 40
          } 
        } 
      })
    }  
    //sessionStorage.removeItem('isConnect')
    else{this.isConnect=false} 
    
    
  }
  getUserImage(user1: any) {
    this.imageService.getImage(user1.profilPicture).subscribe(response => {
   
      this.retrieveResponse = response;
      this.base64Data = this.retrieveResponse.picByte;
      this.retrievedNftImages[user1.username] = 'data:image/jpeg;base64,' + this.base64Data;
      //console.log(user1.username)
    });
  }

}

function task(arg0: string, arg1: string, arg2: (_: any, { ethers }: { ethers: any; }) => Promise<void>) {
    throw new Error('Function not implemented.');
}