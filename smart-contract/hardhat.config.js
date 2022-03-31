require("@nomiclabs/hardhat-waffle");


module.exports = {
  solidity: "0.8.2",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/rTSnXza_mLavGpo3793tnmyL5gTOZ8gY",
      accounts: [
        "79633febc1b3846e1b0e38c106e95f102ed10c66640eedb1ecf92695cff6f35a",
      ],
    },
  },
};
