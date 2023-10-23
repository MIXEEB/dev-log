import { Component } from '@angular/core';

@Component({
  selector: 'app-web3-library-check',
  templateUrl: './web3-library-check.component.html',
  styleUrls: ['./web3-library-check.component.scss', '../styles.scss']
})
export class Web3LibraryCheckComponent {

  codeSnippetContractSend =
  `const createMiniature = (this.contract.methods as any).createMiniature(
    miniature.name,
    miniature.description,
    miniature.miniatureUrl,
    miniature.price
  )
  
  const options = {
    from: this.connectedAccount,
    to: this.contractAddress,
    gas: 3000000
  }

  createMiniature.send({
    from: this.connectedAccount,
    to: this.contractAddress,
    gas: 3000000
  }).then(console.log)
  `;

}
