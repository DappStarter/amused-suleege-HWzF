require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh skull drift rifle stick million grace depth equal gaze'; 
let testAccounts = [
"0xc8c43bff303a6fc9769643314ab82930a099eb52ffe16171d081284ea5982f81",
"0x15d8dbc83cfe329484ed5276a386d59bc76e658f445d0c7dc27350821091895d",
"0x4e6c8a8d7011b90e5b4a47c5e26240f02dbc1b93cf716effca15e72255b8626e",
"0x851588d01e31b802918012ced6e4e1dbaf193cbd8ad4436081eee7d5179bf260",
"0x697bd6926d8c38fcf6f5882210275496e4e4823940c76622312045767711d902",
"0xc0464c3ee74634bfaf2c91c475c60feb302dde4d3779790a4e33334336de65dc",
"0xe2d13e763cbfe5de15230f180ae82b15b7bf5547fa9dbd6901588c3963cbb9a6",
"0xdfa604cd8beb1288d5317ffc5f74a1dc7124466465c8edc2b203b731908143a1",
"0x6d00f66cad98e042b48612148c19a6ab784c0b833fa1f41c4f8e84ca0a7207ea",
"0xc4c206875faba56b4e890649ab3f1f36b578ed38c15d8b0eb82a209f1de03602"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

