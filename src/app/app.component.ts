import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  code:string = 
  `
    let i = 0;
    for(i = 0; i < 10; i++) {
      console.log(i);
    }
  `

}
