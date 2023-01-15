#                      NFTMARKETPLACE
## Objectif : 
le développement min d’un Marketplace des NFTs « web based
DApp », les transactions au niveau du Marketplace se fait a travers crypto monnaie Ethereum.
Le Marketplace est basé sur une architecture hybride avec une base de données NOSQL
Mongodb pour stoker les informations d’ordre générale, par contre les transactions des NFTs
sont gérées par des smart contrats.
## Outils :
Spring boot, Solidity ,Micro Services , Angular , Ether.js , Hardhat, 
 Docker,Jenkins , Github, Mongodb, MetaMask.
## Diagramme de classe :
 ![diag](https://user-images.githubusercontent.com/101187429/212501574-748f6e28-7e7e-4b2e-8d78-2932d3bf71d6.jpg)
## MongoDB :
 <img width="485" alt="Screenshot 2023-01-15 150514" src="https://user-images.githubusercontent.com/101187429/212545670-0eaaad40-d942-4fdc-8ed1-6a4954e1125d.png">
 <img width="757" alt="Screenshot 2023-01-15 150924" src="https://user-images.githubusercontent.com/101187429/212545667-c3885417-cf95-4f2c-be2d-32f3d89b021c.png">

## Lancement :

![1_1](https://user-images.githubusercontent.com/101187429/212546017-ded6d16d-6a1d-41fb-a1c2-583486241663.jpg)

![1](https://user-images.githubusercontent.com/101187429/212501665-57c35e20-a1bb-4553-9f2e-18cfecfcce86.jpg)

![1_3](https://user-images.githubusercontent.com/101187429/212501663-542fe60a-a77d-4d51-be9a-4f8fb00263c8.jpg)

## MetaMask:

![meta](https://user-images.githubusercontent.com/101187429/212547595-b2734fff-0c1e-477b-a7c3-7b1dfea6d69d.jpg)

## Accueil :
 ### Mode Dark :
 
 <img width="945" alt="Screenshot 2023-01-15 152035" src="https://user-images.githubusercontent.com/101187429/212546265-b0f1685a-1fd8-4f3d-aa51-5c1bc2feeea0.png">
<img width="959" alt="Screenshot 2023-01-15 152152 (2)" src="https://user-images.githubusercontent.com/101187429/212549892-24a535fb-b4cf-47ed-b821-a03d4007c6fe.png">
<img width="956" alt="Screenshot 2023-01-15 161609 (1)" src="https://user-images.githubusercontent.com/101187429/212550046-44b5badb-5a25-46e3-99c1-e71c2912d5fb.png">

### Mode Light :

 <img width="283" alt="Screenshot 2023-01-15 152629 (1)" src="https://user-images.githubusercontent.com/101187429/212547589-8d831b79-fe87-49f9-8872-a7dabb0e440f.png">
<img width="960" alt="Screenshot 2023-01-15 161835" src="https://user-images.githubusercontent.com/101187429/212549748-3d78adea-295a-4b33-bf99-2077e8960402.png">

## Se connecter :
 ### Remarque :  si l'internaute se connecte a travers metamask on recupere son adresse de portefeuille et par la suite il peut s'enregistrer ( ajouter un nom , image ...) 
 <img width="218" alt="image" src="https://user-images.githubusercontent.com/101187429/212550163-a51a05a1-0cfe-4ae9-9ae9-5a58c39a7963.png">

## S'enregistrer :
 ### Remarque : lorsque l'utilisateur s'enregistre ses infos(image , name ...) seront stockés (bdd) sauf la balance 
 <img width="909" alt="Screenshot 2023-01-15 163413" src="https://user-images.githubusercontent.com/101187429/212550468-bacd0623-9f3b-4acc-b852-651dd66e4f8e.png">

## Profil : 

## Panier :

  ### afficher panier :
  
  <img width="956" alt="Screenshot 2023-01-15 163835" src="https://user-images.githubusercontent.com/101187429/212550707-5539f08e-3e05-4789-9690-cccddb1f3134.png">
  
  ### ajouter nft au panier :
  ### on va ajouter nft suivant : 
  
  ![mm](https://user-images.githubusercontent.com/101187429/212550866-a8d355e3-4502-4884-9a73-e582e6a031a7.jpg)
 <img width="916" alt="Screenshot 2023-01-15 164305" src="https://user-images.githubusercontent.com/101187429/212550953-d00dda3a-c645-4b47-ab0e-7793e61ed3be.png">
 
 ### delete from panier :
 
 ![sss](https://user-images.githubusercontent.com/101187429/212551006-2328a0fa-53ae-4f84-badb-8aa138553602.jpg)
  
 ### Remarque :  l'ajoute d'un NFT au panier  ca vous dire pas qu'il l'a acheté , il reste dans le marketplace et tout le monde peut le voire mais si qlq un d'autre l'a acheté il sera effacé du panier 
## collections du user :
<img width="958" alt="Screenshot 2023-01-15 170330" src="https://user-images.githubusercontent.com/101187429/212552299-91f450f1-a059-46e3-b128-35f9c82956fb.png">

### ajouter collection :

<img width="959" alt="Screenshot 2023-01-15 170942 (1)" src="https://user-images.githubusercontent.com/101187429/212552443-dc292f75-860c-4067-9741-ca6abe27fa60.png">
<img width="788" alt="Screenshot 2023-01-15 170628" src="https://user-images.githubusercontent.com/101187429/212552462-8b5ad9bd-a8cb-4b61-a042-5b4e438d40cc.png">
 
 ###  detail d'une collection (c-a-d ses  nfts) :
 
<img width="960" alt="Screenshot 2023-01-15 173233 (1)" src="https://user-images.githubusercontent.com/101187429/212554040-2c63b84c-e429-4e37-bed2-c8c9161b09fa.png">
<img width="958" alt="Screenshot 2023-01-15 173749" src="https://user-images.githubusercontent.com/101187429/212554082-7f98f44d-8e59-41f3-889c-eb528009f030.png">
### nft detail :
<img width="959" alt="Screenshot 2023-01-15 175456" src="https://user-images.githubusercontent.com/101187429/212554681-ee53701d-320c-4139-a126-1737b0690bc5.png">

# NFT et BlockChain :
### remarque : lorsque un utilisateur veut creer un nft il doit quelque infos seront stockés dans la bdd (collection ...) et d'autre dans la blockchain (token , owner ) et biensur il doit confirmer la transactions et les frais (gas ) .
### Ajouter NFT :

<img width="959" alt="Screenshot 2023-01-15 171429 (1)" src="https://user-images.githubusercontent.com/101187429/212552802-411d8b02-c415-49c6-89e3-8db39b586ce4.png">
<img width="960" alt="Screenshot 2023-01-15 172245" src="https://user-images.githubusercontent.com/101187429/212553114-fb0b23cf-a7dc-4d5a-8053-61745711cef2.png">
<img width="955" alt="Screenshot 2023-01-15 172407" src="https://user-images.githubusercontent.com/101187429/212553331-9716ab7e-4c3f-41e7-90f9-e26e50e36590.png">
<img width="632" alt="Screenshot 2023-01-15 172823" src="https://user-images.githubusercontent.com/101187429/212553355-68b404df-104f-4966-82bf-2ec3ed604725.png">

![transaction conf](https://user-images.githubusercontent.com/101187429/212554623-94667cd0-7365-41c3-967e-8ca1cac3a2b2.jpg)
<img width="389" alt="Screenshot 2023-01-15 171933 (2)" src="https://user-images.githubusercontent.com/101187429/212553430-e9334398-f6bb-4e55-aa41-5d64f105d691.png">

## Se deconnecter :
![dec](https://user-images.githubusercontent.com/101187429/212554247-7c8b0e72-eb6c-4357-9135-2f30b5c990d0.jpg)

# Docker :
## angular :
### image :
![image](https://user-images.githubusercontent.com/101187429/212556201-67a1058f-ff03-4372-a3e3-6961014f93d3.jpg)

### container :
<img width="776" alt="container" src="https://user-images.githubusercontent.com/101187429/212556205-e4e0bfae-ab26-4844-9733-ad999643072b.png">




# Jenkins :

<img width="658" alt="1 " src="https://user-images.githubusercontent.com/101187429/212549104-f8e0e68f-17c7-4cdf-b364-e07b80c980bc.png">
<img width="650" alt="2 " src="https://user-images.githubusercontent.com/101187429/212549155-6cf505c8-cf5e-4d26-9310-809c3b7de3ac.png">
<img width="656" alt="3" src="https://user-images.githubusercontent.com/101187429/212549176-1c33a423-9481-48aa-b4ca-619ac81164fb.png">
<img width="647" alt="4" src="https://user-images.githubusercontent.com/101187429/212549184-ebd9e742-519f-444b-8e25-c4fea6ca78e8.png">

![5 (1)](https://user-images.githubusercontent.com/101187429/212549371-d1810678-6265-4e2b-8e99-4041a837af2a.png)
<img width="656" alt="6" src="https://user-images.githubusercontent.com/101187429/212549185-b67064a1-43cd-4268-a7df-4d2976032c0b.png">
