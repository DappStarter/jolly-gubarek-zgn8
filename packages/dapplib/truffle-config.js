require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture stool rival maze comic grace flower army gift'; 
let testAccounts = [
"0x0f16a78104fc8b73128a71a327a5fd1a968c0c18c651bb4df736dc86beb28f84",
"0x5be96548e1deb2a6d3288cd38dbe66079115a116ec8ec62f331f204970ac23af",
"0x948d370389db27d27956f4bc3915cfa503df1a2eb387a3414c5e739025a21803",
"0xd3314c55ea1eab6bb25079cac4b5ce9ac5bdee36345516752e8886a15d3c2d02",
"0x1c2c5e772937239fc3ca326702e2449ef9617c09ccdc5b816f0526c37bdf466b",
"0x701cc8cfc1d43a275e4d7e542a1647a4ff10f21aa1ead4d0b74ea276bf1ad757",
"0xf81d2731806f2e7bdc0be572606b35e4f56534f9e59749a5f141050cb35cfd8b",
"0x01bff301c1d2fa7ef91de2e6ea99def022cb53a2ee83389248ed38309a119b86",
"0x4631ca62875d344ab9827c0c110bc45d0b986571bc284c2a0aa1673acfce0a8f",
"0xde469567795a088507c4bfc90622d905c917493e97728b7e7aed3f303f0a440f"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

