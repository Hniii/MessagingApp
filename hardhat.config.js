require('dotenv').config();
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: { mumbai: { url: "https://rpc-mumbai.maticvigil.com", accounts: [process.env.PRIVATE_KEY] } },
  etherscan: { apiKey: { polygonMumbai: process.env.ETHERSCAN_API_KEY } },
};
