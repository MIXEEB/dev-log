import { Component } from '@angular/core';

@Component({
  selector: 'app-web3-library-check',
  templateUrl: './web3-library-check.component.html',
  styleUrls: ['./web3-library-check.component.scss', '../styles.scss']
})
export class Web3LibraryCheckComponent {

  codeSnippedDocsSample = 
  `myContract.methods.myMethod(123).send({from: '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe'})
    .then(function(receipt){
      //handler
    });`;

  codeSnippetContractSend =
  `const createMiniature = (this.contract.methods as any).createMiniature(
    miniature.name,
    miniature.description,
    miniature.miniatureUrl,
    miniature.price
  )

  createMiniature.send({
    from: this.connectedAccount,
    to: this.contractAddress,
    gas: 3000000
  }).then(console.log)
  `;

  codeSnippedRawSend =
  `const data = (this.contract.methods as any).createMiniature(
    miniature.name,
    miniature.description,
    miniature.miniatureUrl,
    miniature.price
  ).encodeABI(); 

  this.web3.eth.sendTransaction({
    from: this.connectedAccount,
    to: this.contractAddress,
    data: data,
    gas: 3000000,
    gasLimit: 3000000
  }).then(console.log);`;

  codeSnippetSendParams = 
  `export const getSendTxParams = ({ abi, params, options, contractOptions, }) => {
    var _a, _b;
    const deploymentCall = (_b = (_a = options === null || options === void 0 ? void 0 : options.input) !== null && _a !== void 0 ? _a : options === null || options === void 0 ? void 0 : options.data) !== null && _b !== void 0 ? _b : contractOptions.input;
    if (!deploymentCall && !(options === null || options === void 0 ? void 0 : options.to) && !contractOptions.address) {
        throw new Web3ContractError('Contract address not specified');
    }
    if (!(options === null || options === void 0 ? void 0 : options.from) && !contractOptions.from) {
        throw new Web3ContractError('Contract "from" address not specified');
    }
    let txParams = mergeDeep({
        to: contractOptions.address,
        gas: contractOptions.gas,
        gasPrice: contractOptions.gasPrice,
        from: contractOptions.from,
        input: contractOptions.input,
        maxPriorityFeePerGas: contractOptions.maxPriorityFeePerGas,
        maxFeePerGas: contractOptions.maxFeePerGas,
    }, options);
    if (!txParams.input || abi.type === 'constructor') {
        txParams = Object.assign(Object.assign({}, txParams), { input: encodeMethodABI(abi, params, txParams.input) });
    }
    return txParams;
  };`;

  codeSnippetSendParamsModified = 
  `export const getSendTxParams = ({ abi, params, options, contractOptions, }) => {
    //original implementation

    //added code
    if (txParams.input && !txParams.data) {
        txParams = Object.assign(Object.assign({}, txParams), { data: encodeMethodABI(abi, params, txParams.input) });
    }
    return txParams;
};`
}
