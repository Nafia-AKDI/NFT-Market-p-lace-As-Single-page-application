require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
/** @type import('hardhat/config').HardhatUserConfig */
// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key
//const ALCHEMY_API_KEY = "bct6MAp4uNvuRcedh5yQzikCSLTh5O2L";
//await network.provider.send("eth_blockNumber", [])
// Replace this private key with your Goerli account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
const GOERLI_PRIVATE_KEY = "df57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e";


module.exports = {
    solidity: "0.8.17",

    networks: {
        hardhat: {
            chainId: 31337
        },
    }
    /*     goerli: {
            url: "https://goerli.infura.io/v3/3eea2d71f7e94a4585546e822ce9c7f2",

            accounts: [GOERLI_PRIVATE_KEY]
        }
    },
    etherscan: {
        // Your API key for Etherscan
        // Obtain one at https://etherscan.io/
        apiKey: "XPXW5V7Y3VCVITYNKU45YRWYEZF4E2A2ZT"
    } */
};