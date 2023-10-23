import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CodeSnippetComponent } from './layout/code-snippet/code-snippet.component';
import { PageLayoutComponent } from './layout/page-layout/page-layout.component';
import { LeftMenuComponent } from './layout/left-menu/left-menu.component';
import { Web3LibraryCheckComponent } from './pages/web3-library-check/web3-library-check.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    CodeSnippetComponent,
    PageLayoutComponent,
    LeftMenuComponent,
    Web3LibraryCheckComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
