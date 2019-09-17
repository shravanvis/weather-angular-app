import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngpractise';
  ComponentName = "Data Binding Component";

  linkUrl = "https://www.google.com";

  isTrue = false;

  returnName(){
    return this.ComponentName;
  }

  print(e){
    console.log(e,'ComponentName');
  }
}
