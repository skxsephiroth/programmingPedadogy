import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Road map to Programming for kids';
  changeTitle(newTitle){
    this.title=newTitle;
  }
}
