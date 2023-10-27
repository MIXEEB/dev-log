import { Routes } from "@angular/router";
import { Web3LibraryCheckComponent } from "./pages/web3-library-check/web3-library-check.component";
import { WelcomeComponent } from "./pages/welcome/welcome.component";

export const routes: Routes = [{
    title: 'Welcome',
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    title: 'Missing transaction data.js',
    path: 'web3-lib-check',
    component: Web3LibraryCheckComponent
  }
];