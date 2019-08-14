var helloEthereum = artifacts.require('./HelloEthereum.sol');
module.exports = function(deployer) {

    deployer.deploy(helloEthereum);
};