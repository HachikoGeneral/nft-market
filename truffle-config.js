const HDWalletProvider = require('@truffle/hdwallet-provider');
const provider = new HDWalletProvider({
  privateKeys: ['1116ead9d0948bc7b873c97b17bad138a263841055d7202564395e8df18a4d27'],
  providerOrUrl: 'http://70.34.216.42:9933'
});

module.exports = {
  networks: {
    development: {
      provider: () => provider,
      network_id: "42"
    },
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      version: "0.8.0", 
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
